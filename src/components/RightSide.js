import React from "react";
import Header from "./Header";
import Button from "./Button";
import Labels from "./Labels";

const Buttons = () => {
  return (
    <div className="grids">
      <Header />
      <div className="grp-1">
        <div>
          <Labels labelValue="<button />" />
          <Button btnId="btn1" btnValue="Default" />
        </div>
        <div>
          <Labels labelValue="&:hover, &:focus" />
          <Button btnId="btn2" btnValue="Default" />
        </div>
        <div>
          <Labels labelValue="<Button variant='outline' />" />
          <Button btnId="btn3" btnValue="Default" />
        </div>
        <div>
          <Labels labelValue="&:hover, &:focus" />
          <Button btnId="btn4" btnValue="Default" />
        </div>
        <div>
          <Labels labelValue="<Button variant='text' />" />
          <Button btnId="btn5" btnValue="Default" />
        </div>
        <div>
          <Labels labelValue="&:hover, &:focus" />
          <Button btnId="btn6" btnValue="Default" />
        </div>
        <div>
          <Labels labelValue="<Button disableShadow />" />
          <Button btnId="btn7" btnValue="Default" />
        </div>
      </div>
      <div className="grp-2">
        <div>
          <Labels labelValue="<button disabled/>" />
          <Button btnId="btn8" btnValue="Disabled" />
        </div>
        <div>
          <Labels labelValue="<Button variant='text' disabled />" />
          <Button btnId="btn9" btnValue="Disabled" />
        </div>
        <div>
          <Labels labelValue="<Button startIcon='local_grocery_store'/>" />
          <Button
            btnId="btn10"
            btnValue="Default"
            iconNameStart="add_shopping_cart"
          />
        </div>
        <div>
          <Labels labelValue="<Button endIcon='local_grocery_store'/>" />
          <Button
            btnId="btn11"
            btnValue="Default"
            iconNameEnd="add_shopping_cart"
          />
        </div>
      </div>
      <div className="grp-3">
        <div>
          <Labels labelValue="<button size='sm'/>" />
          <Button btnId="btn12" btnValue="Default" />
        </div>
        <div>
          <Labels labelValue="<button size='md'/>" />
          <Button btnId="btn13" btnValue="Default" />
        </div>
        <div>
          <Labels labelValue="<button size='lg'/>" />
          <Button btnId="btn14" btnValue="Default" />
        </div>
      </div>
      <div className="grp-4">
        <div>
          <Labels labelValue="<Button color='default' />" />
          <Button btnId="btn15" btnValue="Default" />
        </div>
        <div>
          <Labels labelValue="<Button color='primary' />" />
          <Button btnId="btn16" btnValue="Primary" />
        </div>{" "}
        <div>
          <Labels labelValue="<Button color='secondary' />" />
          <Button btnId="btn17" btnValue="Secondary" />
        </div>
        <div>
          <Labels labelValue="<Button color='danger' />" />
          <Button btnId="btn18" btnValue="Danger" />
        </div>
        <div>
          <Labels labelValue="&:hover, &:focus" />
          <Button btnId="btn19" btnValue="Default" />
        </div>
        <div>
          {" "}
          <Button btnId="btn20" btnValue="Primary" />
        </div>
        <div>
          {" "}
          <Button btnId="btn21" btnValue="Secondary" />
        </div>
        <div>
          {" "}
          <Button btnId="btn22" btnValue="Danger" />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
