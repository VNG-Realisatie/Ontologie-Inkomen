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
    localizationStrings: {
        nl: {
            // Specificatie-statussen	
            cv: "Consultatieversie",
            vv: "Versie ter vaststelling",
	    ig: "In Gebruik versie",
	    io: "In Ontwikkeling versie",
 //           tg: "Teruggetrokken versie",
	    // Specificatie-types
            im: "Informatiemodel",
            hl: "Handleiding",
//            basis: "Document",
//            no: "Norm",
            st: "Standaard",
//            pr: "Praktijkrichtlijn",
//            wa: "Werkafspraak",
//            al: "Algemeen",
//            bd: "Beheerdocumentatie",
//            bp: "Best practice",
        },
//        en: {
            // Specificatie-statussen	
//            cv: "Recommendation",
//            vv: "Proposed recommendation",
//            eo: "Outdated version",
//            tg: "Rescinded version",
	    // Specificatie-types
//            basis: "Document",
//            no: "Norm",
//            st: "Standard",
//            im: "Information model",
//            pr: "Guideline",
//            hr: "Guide",
//            wa: "Proposed recommendation",
//            al: "General",
//            bd: "Governance documentation",
//            bp: "Best practice",
//        },
    },

    sotdText: {
        nl: {
            sotd: "Status van dit document",
            cv: "Dit is een door het werkgroep Ontologie goedgekeurde consultatieversie. Commentaar over dit document kan gestuurd worden via de knop Dien een melding in",
            vv: "Dit is een definitief concept van de nieuwe versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.",
	    ig: "Dit document is 'In Gebruik'.",
	    io: "Dit document is nog 'In Ontwikkeling'.",
        },
//      en: {
//          sotd: "Status of This Document",
//          def: `This is the definitive version of this document. Edits resulting from consultations have been applied.`,
//          wv: `This is a draft that could be altered, removed or replaced by other documents. It is not a recommendation approved by TO.`,
//          cv: `This is a proposed recommendation approved by TO. Comments regarding this document may be sent to `,
//          vv: `This is the definitive concept of this document. Edits resulting from consultations have been applied.`,
//          basis: "This document has no official standing.",
//	    ig: "This document is 'In Use'.",
//	    io: "This document is is still 'Under Development'.",
//        },
    },

    labelColor: {
//        def: "#154273",
//        wv: "#39870c",
	ig: "#A569BD",
	io: "#DC7633"
    }
}
