import clsx from "clsx";

interface CardProps {
  className: string;
  children: React.ReactNode;
  id?: string;
}

const defaultCardClass = "rounded-2xl bg-secondary p-4";

const Card = ({ className, children, id }: CardProps) => {
  return (
    <div id={id} className={clsx(defaultCardClass, className)}>
      {children}
    </div>
  );
};

export default Card;
