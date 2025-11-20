import CardHeader from "./CardHeader"
import classes from "./Card.module.css"

export default function Card() {
  return (
    <div className={classes.container}>
      <CardHeader />
    </div>
  )
}