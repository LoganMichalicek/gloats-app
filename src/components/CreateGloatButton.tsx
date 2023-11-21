import "./CreateGloatButton.css";

interface CreateGloatButtonProps {
  onClick: () => void;
}

const CreateGloatButton = ({ onClick }: CreateGloatButtonProps) => {
  return (
    <button className="create-gloat-button" onClick={onClick}>
      Create New Gloat
    </button>
  );
};

export default CreateGloatButton;
