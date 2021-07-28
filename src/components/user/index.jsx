const Index = ({ num, onclick }) => {
  return (
    <h1
      className="cursor-pointer w-4/12 bg-gray-200 my-4 rounded-lg mx-auto transition-all hover:text-white hover:bg-red-600"
      onClick={onclick}
    >
      User {num}
    </h1>
  );
};

export default Index;
