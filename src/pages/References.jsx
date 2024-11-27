import React from "react";
import "./References.css";
import { FaBuilding } from "react-icons/fa";

const references = [
  "Ay Yapı Office",
  "Ay Yapı Ihlamur",
  "Ay Yapı Çınar",
  "Ay Yapı Corner",
  "Bedir Villaları Dış Cephe",
  "Oğur Yapı LA VISTA",
  "ÇEYSA Cadde 75",
  "Çeysa Sin Mermer",
  "Bubya Seyrantepe",
  "Bubya Üçkuyular",
  "Bubya Üniversite",
  "Kaya 1 Doğa Evleri",
  "Kaya 2 Kayakent Evleri",
  "Enç İnşaat",
  "Tepe City 1/2/3",
  "Serin Yapı",
  "PİA Yapı",
  "Selenyum İnşaat",
  "Özmenler Yapı",
  "Remzi Tekin",
  "Elbeyler Grup",
  "Elbeyler İnşaat",
  "Zana Yapı",
  "Karakuş Yapı",
  "Çetinler Diyarland",
  "Furkan Yapı",
  "Öge Gold",
  "Yakut21 İnşaat",
  "Taşlan İnşaat",
  "Çavuşoğlu İnşaat",
  "Sedat Yiğit",
];

const References = () => {
  return (
    <div className="references-container">
      <h2 className="references-title">Referanslarımız</h2>
      <div className="references-grid">
        {references.map((ref, index) => (
          <div className="reference-card" key={index}>
            <FaBuilding className="reference-icon" />
            <p className="reference-name">{ref}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;
