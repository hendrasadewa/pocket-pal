import { Category, Period } from '@prisma/client';

export interface ComposedBudget {
  id: number;
  name: string;
  period: Period;
  category: Category;
  amount: number;
}
