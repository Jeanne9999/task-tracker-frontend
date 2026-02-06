interface Props {
    title:string;
    message:string;
    onConfirm:() => void;
    onCancel:() => void;
}

const ConfirmModal: React.FC<Props> = ({
    title,
    message,
    onConfirm,
    onCancel,
}) => {
    return (
        <div className="fixed inset-0 bg-black-100 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-sm">

                <h2 className="text-lg font-bold mb-2">
                    {title}
                </h2>

                <p className="text-gray-600 mb-4">
                    {message}
                </p>

                <div className="flex justify-end gap-2">

                    <button
                        onClick={onCancel}
                        className="px-4 py-2 border rounded"
                        >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-600 text-white rounded"
                    >
                        Delete
                    </button>

                </div>

            </div>
        </div>
    );
};

export default ConfirmModal;