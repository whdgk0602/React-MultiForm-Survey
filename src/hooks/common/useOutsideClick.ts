import { useEffect, useRef } from "react";

export default function useOutSideClick(callback : () => void){
	const ref = useRef<HTMLElement>(null);

	useEffect(()=>{
		const handleClik = (e:MouseEvent | TouchEvent)=>{
			if(ref.current && !ref.current.contains(e.target as Node)){
				callback();
			}
		}
		document.addEventListener('mousedown', handleClik);
		document.addEventListener('touchstart', handleClik);

		return ()=>{
			document.removeEventListener('mousedown', handleClik);
			document.removeEventListener('touchstart', handleClik);
		}
	}, [callback])
	return ref;
}