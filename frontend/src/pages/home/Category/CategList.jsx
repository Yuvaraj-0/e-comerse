import { useNavigate } from 'react-router-dom';
const categories = ['Electronics', 'Dress','Toys', 'Ornaments', 'Kitchen','Foods','Decoratives'];
const CategList = () => {
    const navigate = useNavigate();

    const handleClick = (category) => {
      navigate(`/products/${category}`);
    };
  return (
    <div className=" flex w-full justify-between">
      {categories.map((cat) => (
        <div
          key={cat}
          onClick={() => handleClick(cat)}
          className="cursor-pointer p-3 border rounded hover:bg-gray-100"
        >
          {cat}
        </div>
      ))}
    </div>
  );
};

export default CategList;
