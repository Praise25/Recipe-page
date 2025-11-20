import headerImg from "../../assets/image-omelette.jpeg"
import classes from "./CardHeader.module.css"

export default function CardHeader () {
  return (
    <img className={classes["image-container"]} src={headerImg} alt="A picture of an omelette" />
  )
}