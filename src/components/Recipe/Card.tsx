import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import classes from "./Card.module.css";

export default function Card() {
  return (
    <div className={classes.container}>
      <CardHeader />
      <CardContent />
    </div>
  );
}
