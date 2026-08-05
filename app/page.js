import LikeButton from './likeButton';

function Header({title}) {
    return;
    <h1>{title ? title : 'Default title'}</h1>;
}
export default function HomePage() {
    const names = ['Ada', 'Grace', 'Margaret'];

    function handleClick() {
        setLikes(likes + 1);
    }
    return (
        <div>
            <header title='Develop. Preview. Ship.' />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <LikeButton />
        </div>
    );
}
