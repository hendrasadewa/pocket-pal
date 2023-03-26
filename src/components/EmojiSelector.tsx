import EmojiPicker, {
  Emoji,
  EmojiClickData,
  EmojiStyle,
} from 'emoji-picker-react';
import { useState } from 'react';

interface Props {
  defaultValue?: string;
  onSelected: (emoji: string) => void;
}

export default function EmojiSelector({
  defaultValue = '1f92a',
  onSelected,
}: Props) {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [emoji, setEmoji] = useState<string>(defaultValue);

  const toggleEmojiPicker = () => {
    setVisible((prev) => !prev);
  };

  const handleSelectEmoji = (emojiData: EmojiClickData, e: MouseEvent) => {
    setEmoji(emojiData.unified);
    onSelected(emojiData.unified);
    toggleEmojiPicker();
  };

  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Select Emoji</span>
        </label>
        <button
          className="btn btn-outline"
          type="button"
          onClick={toggleEmojiPicker}
        >
          {emoji ? (
            <Emoji unified={emoji} emojiStyle={EmojiStyle.APPLE} size={22} />
          ) : (
            'Select Emoji'
          )}
        </button>
      </div>
      <div className={isVisible ? 'block' : 'hidden'}>
        <EmojiPicker onEmojiClick={handleSelectEmoji} width="100%" />
      </div>
    </>
  );
}
