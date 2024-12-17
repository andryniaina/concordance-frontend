import Logo from "../../assets/images/Logo.png";
import Title from "../../assets/images/Title.png";
import Graph from "../components/Graph";
import Table from "../components/Table";

function Result() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center py-16 border-b-4 border-solid border-black">
        <img src={Title} alt="title" />
      </div>
      <div className="flex flex-col px-20">
        <span className="flex justify-center font-bold text-xl pt-3">
          CONCORDANCE CADASTRALE
        </span>
        <div className="flex flex-col pb-7 pt-10 text-bl font-medium">
          <span>Référence :</span>
          <span>Adresse du bien : 31 rue des bleuets – 72700 ROUILLON</span>
          <span>Parcelle cadastrale : AC n°162</span>
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <span className="font-medium underline">
            Graphique de généalogie de la parcelle :
          </span>
          <Graph />
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-medium underline">
            Tableau de généalogie de la parcelle AT 862 :
          </span>
          <Table/>
        </div>
      </div>
      <div className="flex flex-row px-5">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex flex-col px-5">
          <span>URBATECH SOLUTIONS</span>
          <span>229 rue Saint-Honoré 75001 PARIS</span>
          <span>
            SAS au capital de 100 000 euros, immatriculée au RCS de Paris sous
            le numéro 928 165 380
          </span>
          <span>
            SIRET 92816538000017 - n° de TVA Intracommunautaire FR87928165380
          </span>
        </div>
      </div>
    </div>
  );
}

export default Result;
