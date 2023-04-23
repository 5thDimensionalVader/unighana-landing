/* eslint-disable react/prop-types */

function AnchorButton({ href, name }) {
  return (
    <a
      href={href}
      className="text-center transition ease-in-out delay-150 block lg:inline-block mt-4 lg:mt-2 bg-custom-red p-2 w-auto rounded-sm hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300"
    >
      {name}
    </a>
  );
}

export default AnchorButton;