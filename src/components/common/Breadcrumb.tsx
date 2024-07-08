import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Crumb = {
  title: string;
  url: string;
};

type BreadcrumbProps = {
  crumbs: Crumb[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ crumbs }) => {
  return (
    <div className="text-[#5A5A5A] text-sm breadcrumbs">
      <ul className="list-none p-0 inline-flex">
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center gap-x-1">
            <a
              href={crumb.url}
              className="text-lightBlue-700 text-xs hover:underline"
            >
              {crumb.title}
            </a>
            {index < crumbs.length - 1 && (
              <ArrowRight className="text-lightBlue-700" size={12} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
