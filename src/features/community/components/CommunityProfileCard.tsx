interface CommunityProfileCardProps {
  name: string
  image?: string
  postCount: number
}

export default function CommunityProfileCard({ name, image, postCount }: CommunityProfileCardProps) {
  return (
    <section className="community-profile">
      {image ? (
        <img src={image} alt="" className="community-profile__photo" referrerPolicy="no-referrer" />
      ) : (
        <span className="community-profile__photo community-profile__photo--empty" />
      )}
      <h1 className="community-profile__name">{name}</h1>
      <p className="community-profile__meta">내 글 {postCount}편 · 나만 보이는 기록</p>
    </section>
  )
}
