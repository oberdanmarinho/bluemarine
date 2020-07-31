import React from "react";

export default function ButtonLink(props) {
// props => { ClassName: "O que alguem passar", href: "/"}
  
  return (
    <a href={props.href} className={props.className} >
      {props.children}
    </a>
  );
}
