export type NewsItem = {
  id: string
  date: string
  title: string
  excerpt: string
  image: string
}

export const newsDemo: NewsItem[] = [
  {
    id: "n1",
    date: "25.02.2023",
    title: "Скоро главный праздник весны!",
    excerpt: "Девушки любят когда вкусно, красиво и душевно. Смотрите большие наборы с ассорти разных вкусов.",
    image: "/placeholder.svg?height=300&width=400&text=Spring+News",
  },
  {
    id: "n2",
    date: "17.02.2023",
    title: "Конкурс на 23 февраля!",
    excerpt:
      "День Защитника Отечества уже совсем скоро! Порадуйте своих сладкоежек с помощью аппетитных наборов от МакаронсШоп.",
    image: "/placeholder.svg?height=300&width=400&text=February+Contest",
  },
  {
    id: "n3",
    date: "11.02.2023",
    title: "Экспресс-конкурс ко дню Святого Валентина",
    excerpt:
      "Подарок уже через 2 дня! День всех влюблённых не за горами. Расскажи о своих чувствах с помощью сладкой валентинки.",
    image: "/placeholder.svg?height=300&width=400&text=Valentine+Contest",
  },
]
