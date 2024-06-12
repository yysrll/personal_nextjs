export default function Label({text} : {text: string}) {
    return (
        <div className="px-4 py-2 border border-white rounded-md">
            <p className="text-sm">{text}</p>
        </div>
    );
}