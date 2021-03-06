import Head from "next/head";
import { HomeWrapper } from "./home.style.js";
import Header from "../../components/global/Header/Header";
import { Button } from "antd";
import { Checkbox } from "antd";
import { useState, useEffect } from "react";

export default function Home() {
  const [showImage, setShowImage] = useState(false);

  const afficheImage = () => {
    setShowImage(!showImage);
  };

  useEffect(() => {
    //alert("image modifiée");
  }, [showImage]);

  return (
    <HomeWrapper>
      <Header></Header>
      <Head>
        <title>EASY CAPITAL</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/easycapital/image/upload/v1623230243/espace_client/zifepqxqhcunrtosgv0j.ico"
        />
      </Head>

      <div className="main">
        <div class="textG">
          <div class="divyello">
            <p>
              <strong>Gérez tout votre patrimoine</strong>
            </p>
          </div>
          <div class="divnoir">
            <p>
              <strong>en un seul endroit</strong>
            </p>
          </div>
          <div class="txtGray">
            <p>
              Un outil de gestion de patrimoine simple et puissant pour prendre
              les bonnes décisions.
            </p>
          </div>
          <div class="begin">
            <Button type="Primary" className="bl">
              Commencez à gérer mieux
            </Button>
            <Button>Etre accompagné par téléphone</Button>
          </div>
          <div className="elemCoche">
            <Checkbox checked>Aucune carte de crédit requise</Checkbox>
            <Checkbox checked>Pas de logiciel à installer</Checkbox>
          </div>
          <div className="img">
            <img
              src="https://res.cloudinary.com/easycapital/image/upload/v1623230243/espace_client/hl1gvwcramf6wtp6atjc.png"
              id="tableImage"
            />
          </div>
        </div>
        <div className="fin">
          <p>
            <strong> Tous vos biens </strong> immobiliers et financiers analysés
            chaque jour pour
            <strong> diversifier, optimiser et économiser.</strong>
          </p>
        </div>
        <div className="footer">
          <img
            src="https://res.cloudinary.com/easycapital/image/upload/v1623230243/espace_client/ozm9hgixqbt0qwvbgsal.png"
            alt=""
          />
        </div>
        <div className="fonction">
          <div id="AVC" onClick={() => afficheImage()}>
            Agréger vos comptes
          </div>
          <div>Suivre votre patrimoine </div>
          <div>Analyser la diversification</div>
          <div>Valider le rendement passé</div>
          <div>Calculer les frais de transmission</div>
          <div>Projeter vos futurs investissements</div>
        </div>
        <div className="fnView">
          {showImage ? (
            <img
              src="https://res.cloudinary.com/easycapital/image/upload/v1623239701/espace_client/wouatshoqznxycbrx9fz.png"
              id="profil"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </HomeWrapper>
  );
}
