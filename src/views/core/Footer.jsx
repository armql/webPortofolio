export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-between px-6 py-8">
      <span className="font-medium">armlq28</span>
      <div className="flex flex-row items-center gap-4 font-light">
        <a
          href="https://www.linkedin.com/in/arlind-m-54424721a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADc1bkQBouoNS7-fZrVbA_VCq96t74iiris&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people%3Bejb4qlidT%2B6s331sfWuiaw%3D%3D"
          className="hover:underline"
        >
          Linkedin
        </a>
        <a href="https://github.com/armql" className="hover:underline">
          Github
        </a>
      </div>
    </footer>
  );
}
