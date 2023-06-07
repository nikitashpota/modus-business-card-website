import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const MyMap = () => {
  return (
      <YMaps query={{ lang: "en_RU" }}>
        <Map
          width={450}
          height={250}
          defaultState={{ zoom: 15, center: [55.751574, 37.573856] }}
        >
          <Placemark />
        </Map>
      </YMaps>

  );
};

export default MyMap;
