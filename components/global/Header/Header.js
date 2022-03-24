import { HeaderWrapper } from "./Header.style.js";
import React from "react";
import { Layout, Menu } from "antd";
import { Button } from "antd";
const AntdHeader = Layout.Header;

export default function Header({}) {
  return (
    <HeaderWrapper>
      <div class="barre">
        <img src="https://res.cloudinary.com/easycapital/image/upload/v1623230243/espace_client/xj7c4eyamcfnleszo268.png" alt="" id="logoImage" />
        <div>
          <span className="test">Outil</span>
        </div>
        <div>Sécurité</div>
        <div>Tarifs</div>
        <div>Guides</div>
      </div>
      <div class="push">
        <Button>Se connecter</Button>
        <Button className="bleu" type="Primary">
          Commencez gratuitement
        </Button>
      </div>
    </HeaderWrapper>
  );
}
