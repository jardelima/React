import Slide from './Slide';

function App() {
    const slides = [
        {
            id: "slide1",
            text: "Slide 01",
        },
        {
            id: "slide2",
            text: "Slide 02",
        },
        {
            id: "slide3",
            text: "Slide 03",
        }
    ];

    return (
        <div>
            <Slide slides={ slides } />
        </div>
    );
}

export default App;