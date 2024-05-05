'use client';
import { useRef, useEffect } from "react";
import Column from "../../../components/Column";
import useStore from "./store";
import Modal from "../../../components/Modal";

const Table = ()=> {
    const cards = useStore((state) => state.cards);
    const modalRef = useRef();

    useEffect(() => {
      modalRef.current.showModal();
    }, []);

    const callback = (e)=> {
        e.preventDefault();
        console.log("click")
    }

    return (
        <article className="grid grid-cols-3 gap-4 grid-rows-[auto]">
            {
                cards.map(card => <Column {...card} key={card.color} />)
            }
            <Modal modalRef={modalRef} callback={callback} />
        </article>
    );
}

export default Table;
