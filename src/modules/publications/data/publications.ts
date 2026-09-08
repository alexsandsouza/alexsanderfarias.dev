import { PublicationItem } from "@/shared/types";

export const publicationsData: PublicationItem[] = [
  {
    id: "pub-ai-education-2025",
    title: "<TODO: Alexsander informar título da publicação científica mais recente>",
    authors: ["Alexsander Farias", "<TODO: Co-autores>"],
    year: 2025,
    venue: "<TODO: Conferência / Periódico Internacional>",
    type: "journal",
    area: "ai",
    doi: "10.1000/TODO-alexsander-doi",
    pdfUrl: "https://alexsanderfarias.dev/TODO-paper.pdf",
    bibtex: `@article{farias2025ai,
  title={<TODO: Titulo do artigo>},
  author={Farias, Alexsander and others},
  journal={<TODO: Periodico>},
  year={2025},
  doi={10.1000/TODO-alexsander-doi}
}`,
    abstract:
      "<TODO: Alexsander informar abstract oficial da publicação. Este espaço apresentará o resumo formal da investigação científica>",
  },
  {
    id: "pub-software-eng-education-2024",
    title: "<TODO: Alexsander informar título de artigo em Ensino de Computação>",
    authors: ["Alexsander Farias"],
    year: 2024,
    venue: "<TODO: Simpósio Brasileiro de Informática na Educação / Evento equivalente>",
    type: "conference",
    area: "education",
    doi: "10.1000/TODO-alexsander-doi-2024",
    pdfUrl: "https://alexsanderfarias.dev/TODO-paper-2024.pdf",
    bibtex: `@inproceedings{farias2024teaching,
  title={<TODO: Titulo da publicacao em ensino>},
  author={Farias, Alexsander},
  booktitle={<TODO: Anais do Congresso>},
  year={2024},
  doi={10.1000/TODO-alexsander-doi-2024}
}`,
    abstract:
      "<TODO: Alexsander informar abstract oficial sobre metodologias de ensino de programação e engenharia>",
  },
  {
    id: "pub-distributed-systems-2023",
    title: "<TODO: Alexsander informar título de artigo sobre Arquitetura / Sistemas Distribuídos>",
    authors: ["Alexsander Farias"],
    year: 2023,
    venue: "<TODO: Workshop ou Congresso Técnico>",
    type: "workshop",
    area: "software-engineering",
    bibtex: `@inproceedings{farias2023systems,
  title={<TODO: Titulo do trabalho em sistemas>},
  author={Farias, Alexsander},
  booktitle={<TODO: Anais do Workshop>},
  year={2023}
}`,
    abstract:
      "<TODO: Alexsander informar abstract sobre avaliação de desempenho e resiliência em arquiteturas modulares>",
  },
];
