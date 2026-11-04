export default function FeaturedCard({image, title, description }){
   return (
    <div className="card h-100 border-0">
      <img src={image} alt={title}
       className="card-img-top img-fluid rounded-4"
      />
      <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{description}</p>
      </div>
    </div>
   )
}