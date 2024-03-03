import React from "react"
import styled from "./styled.module.scss"
import Typography from "../UI-Kit/Typography"
import img from "../../assets/img4.webp"
import Button from "../UI-Kit/Button"
import AppLink from "../UI-Kit/AppLink"
import Image from "../UI-Kit/Image"

const Card: React.FC = () => {
  const add = () => {
    console.log("test");
  };

  return (
    <article className={styled.card}>
      <div className={styled.wrapper}>
        <AppLink href="/product/55">
          <div className={styled.imageWrapper}>
            <Image src={img} alt="" className={styled.img} />
          </div>
        </AppLink>

        <div className={styled.action}>
          <Button onClick={add} className={styled.addToCart}>
            add to cart
          </Button>
        </div>
      </div>
      <AppLink href="/product/55">
        <div className={styled.contentWrapper}>
          <Typography tag="h3" className={styled.cardTitle}>
            Yuki Hair Pin Set of 3
          </Typography>
          <Typography tag="p" className={styled.price}>
            $ 29,00
          </Typography>
        </div>
      </AppLink>
    </article>
  );
};

export default Card;
