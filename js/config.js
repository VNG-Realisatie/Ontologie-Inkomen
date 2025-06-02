let respecConfig = {
//  useLogo: true,
  useLabel: true,
//  license: "eupl",
  shortName: "OntInk",
  pubDomain: "cim",

  // Zie de globale property 'localizationStrings/nl' voor de lijst met toegestane specificatie-types
  specType: "im",
  
  // Zie de globale property 'localizationStrings/nl' voor de lijst met toegestane specificatie-statussen
  specStatus: "cv",
  publishDate: "2025-06-01",
  publishVersion: "1.2.0",

  // Zie de globale property 'localizationStrings/nl' voor de lijst met toegestane maturities
  //previousMaturity: "IO",
  //previousPublishDate: "2022-06-24",
  //previousPublishVersion: "0.0.4",
  
  title: "Ontologie inkomen",
  subtitle: "",
 // content: {},
  authors:
    [
      {
        name: "Jan Brinkkemper",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
     }
    ],
  editors:
    [
      {
        name: "Jan Brinkkemper",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
      }
    ],
  github: "https://github.com/VNG-Realisatie/Ontologie-Inkomen.git",

  //  maxTocLevel: 2,

  // Creëer PDF en link deze aan de file in de header van het html document (optioneel). Het is (nog) niet mogelijk hier een globale property van te maken:
  alternateFormats: [
      {
          label: "pdf",
          uri: "Ontologie-Inkomen.pdf",
      },
    ],
  localBiblio: {
        "MIM": {
           "href": "https://docs.geostandaarden.nl/mim/mim/",
           "publisher": "Geonovum",
           "title": "MIM - Metamodel Informatie Modellering",
           "date": "Oktober 2023",
           "rawDate": "2023"
        },
        "SemVer": {
           "href": "https://semver.org/lang/nl/",
           "title": "Semantisch Versioneren 2.0.0",
           "date": "December 19, 2023",
           "rawDate": "2023"
        },
    },
	labelColor: {
    "def": "#045D9F",
    "wv": "#FF0000",
    "cv": "#045D9F",
    "vv": "#045D9F",
    "basis": "#80CC28",
    "ld": "#80CC28"
		},
	sotdText: {
        nl: {
            sotd: "Status van dit document",
            cv: `Dit is een door de werkgroep Ontologie goedgekeurde consultatieversie. Commentaar over dit document kan gestuurd worden naar gemeld worden via de knop Dien een melding in`,
            vv: `Dit is een definitief concept van de nieuwe versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
	    ig: "Dit document is 'In Gebruik'.",
	    io: "Dit document is nog 'In Ontwikkeling'."
	}
}
