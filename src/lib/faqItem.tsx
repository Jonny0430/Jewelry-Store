import type { FaqItem } from "../screens/OrderPage/FaqCardsSection";
import FaqCardsSection from "../screens/OrderPage/FaqCardsSection";

const faqData: FaqItem[] = [
  {
    id: "1",
    title: "Makaron pirojnalari qancha muddat saqlanadi?",
    body: "Saqlash muddati haqida ma’lumot blabla...",
  },
  {
    id: "2",
    title: "Buyurtmalarni qanchalik tez bajarib beramiz?",
    body:
      "Buyurtmalarni bajarishning standart muddati 3–5 kun. Yuqori talab davrida va Yangi yil arafasida bu muddat uzayishi mumkin...",
  },
  {
    id: "3",
    title: "2 kun ichida bo‘ladimi?",
    body: "Shoshilinch buyurtmalar uchun qo‘shimcha to‘lov haqida matn",
  },
];

export default function Page() {
  return <FaqCardsSection items={faqData} />;
}
