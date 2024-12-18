import Logo from "../../assets/images/Logo.png";
import Title from "../../assets/images/Title.png";
import Graph from "../components/Graph";
import Table from "../components/Table";

function Result() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center py-16 border-b-2 border-solid border-black">
        <img src={Title} alt="title" />
      </div>
      <div className="flex flex-col px-20 pb-20">
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
        <div className="flex flex-col gap-3 pb-7">
          <span className="font-medium underline">
            Tableau de généalogie de la parcelle AT 862 :
          </span>
          <Table />
        </div>
        <div className="flex flex-col text-sm gap-6">
          <div className="flex flex-col gap-2">
            <div>*500 Liste complète des parcelles du DMPC</div>
            <div>
              <div className="flex flex-row">
                <div className="w-1/12">Mère(s):</div>
                <div className="w-10/12">
                  AC 48, AC 54, AC 55, AC 56, AC 57, AC 58, AC 59, AC 60, AC 61,
                  AC 62, AC 63, AC 64, AC 65, AC 66, AC 67, AC 68, AC 69, AC 70,
                  AC 71, AC 72, AC 73, AC 74, AC 75, AC 76, AC 77, AC 78
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-1/12">Fille(s):</div>
                <div className="w-10/12">
                  AC 79, AC 80, AC 81, AC 82, AC 83, AC 84, AC 85, AC 86, AC 87,
                  AC 88, AC 89, AC 90, AC 91, AC 92, AC 93, AC 94, AC 95, AC 96,
                  AC 97, AC 98, AC 99, AC 100, AC 101, AC 102, AC 103, AC 104,
                  AC 105, AC 106, AC 107, AC 108, AC 109
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>*0526 Liste complète des parcelles du DMPC</div>
            <div>
              <div className="flex flex-row">
                <div className="w-1/12">Mère(s):</div>
                <div className="w-10/12">AC 158</div>
              </div>
              <div className="flex flex-row">
                <div className="w-1/12">Fille(s):</div>
                <div className="w-10/12">
                  AC 159, AC 160, AC 161, AC 162, AC 163, AC 164, AC 165, AC
                  166, AC 167, AC 168, AC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row px-20 gap-10 pb-5 border-t-2 border-solid border-black pt-2">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex flex-col items-center justify-center text-sm font-semibold">
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
