'use client';

import { createCategory, updateCategory } from '@/services/category';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import EmojiPicker, {
  Emoji,
  EmojiClickData,
  EmojiStyle,
} from 'emoji-picker-react';
import EmojiSelector from '@/components/EmojiSelector';

interface FormElements extends HTMLFormControlsCollection {
  categoryName: HTMLInputElement;
}
interface CategoryFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

interface Props {
  mode: 'create' | 'edit';
  id?: number;
  initialValue?: {
    name?: string;
    emoji?: string;
  };
}

export function CategoryForm({ mode, id, initialValue }: Props) {
  const [emoji, setEmoji] = useState<string>(initialValue?.emoji || '');
  const router = useRouter();
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<CategoryFormElements>) => {
    event.preventDefault();
    setSubmitting(true);

    const { categoryName } = event.currentTarget.elements;
    if (mode === 'create') {
      await createCategory(categoryName.value, emoji);
    } else if (id && mode === 'edit') {
      await updateCategory(id, categoryName.value, emoji);
    }

    setSubmitting(false);
    router.replace('/manage/category');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between h-full gap-2 pb-2"
    >
      <div className="flex flex-col gap-2 pb-2">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Category Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="categoryName"
            disabled={isSubmitting}
            defaultValue={initialValue?.name}
          />
        </div>
        <EmojiSelector onSelected={(emoji) => setEmoji(emoji)} />
      </div>
      <div className="flex flex-col gap-2">
        <button
          type="submit"
          className={['btn btn-block', isSubmitting ? 'loading' : ''].join(' ')}
          disabled={isSubmitting}
        >
          Submit
        </button>
        <button
          type="button"
          className="btn btn-outline"
          disabled={isSubmitting}
          onClick={() => {
            router.back();
          }}
        >
          Back
        </button>
      </div>
    </form>
  );
}
