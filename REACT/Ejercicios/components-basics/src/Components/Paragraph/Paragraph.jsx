import "./Paragraph.css";

export const Paragraph = ({ texto, className }) => {
  return <p className={className}>{texto}</p>;
};