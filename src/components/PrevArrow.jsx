export default function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow custom-prev-arrow`}
            onClick={onClick}
        >
            &#10094; 
        </div>
    );
};