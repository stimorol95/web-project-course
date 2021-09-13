import "./styles.scss";
import { drawPicture } from "./item";
import { items } from "./items";

items.map((item) => drawPicture(item));
