export interface AllTextProps {
  top: {
    hi_there: string,
    i_am: {
      name: string,
      profession: string,
    },
    its_pleasure: string
  }
}

export const allTextsEnglish =
  {
    top: {
      hi_there: "Hi there!",
      i_am: { name: "I'm Mauricio Rodrigues and i'm a", profession: "Front-end Engineer/Developer." },
      its_pleasure: "it's a pleasure to welcome you here"
    }
  } as AllTextProps;

export const allTextsPortuguese =
  {
    top: {
      hi_there: "Opa tudo bom?",
      i_am: { name: "Me chamo Mauricio Rodrigues", profession: "sou Engenheiro/Desenvolvedor Front-end" },
      its_pleasure: "é uma satisfação receber você aqui"
    }
  } as AllTextProps;
