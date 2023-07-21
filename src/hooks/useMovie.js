// import 

export default function useMovie(items)
{
   const [imgUrlList, setImgUrlList] = useState([]);
   const [isTitle, setIsTitle] = useState(true);
   useEffect(() => {
      const listUrl = items.data?.map((value) => {
         let obj = {
            id: value.id,
            imgUrl: `${SOURCE.BASE_IMG_URL}${value.backdrop_path}`,

         };
         // if title Originals is poster then take backdrop_path
         if (items.title.includes("Original")){
            obj = {
               id: value.id,
               imgUrl: `${SOURCE.BASE_IMG_URL}${value.poster_path}`,
            };
            setIsTitle(false);
         }
         return obj;
      });
      if (listUrl) {
         setImgUrlList(listUrl);
      }
   }, [items, isTitle]);
}