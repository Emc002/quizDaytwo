import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const ukuran = {
    marginTop: "3rem",
    width: "90vw",
    height: "30vh",
    fontSize: "5rem",
    textTransform: "uppercase",
    backgroundColor: "#7464fb",
    boxShadow: "-0.7rem 2rem 1rem 1rem rgba(0, 0, 0, 0.47)",
    borderRadius: "1rem",
    color: "white",
    padding: "3rem 2rem 2rem 3rem",
    marginLeft: "4rem"

  }

  const post = [
    {
      id: 1,
      name: "NICOLA TESLA",
      gambar: "https://www.akupaham.com/wp-content/uploads/2017/05/Biografi-Nikola-Tesla-e1504254213735.jpg",
      history: "adalah seorang penemu, fisikawan, teknisi mekanik, dan teknisi listrik berkebangsaan Serbia-Amerika. Ia terkenal berkat kontribusinya dalam mendesain sistem kelistrikan arus bolak-balik (AC).[7]"
    },
    {
      id: 2,
      name: "AL-JAZARI",
      gambar: "https://s3-jak01.storageraya.com/f3a2b9b3361454e63/1597394829_M7SzZz85kujsPsW4bNi2jlSLOcyMq8ayT6GAXQPw.jpg",
      history: "Orang pertama yang benar-benar membangun robot humanoid yang dapat diprogram adalah Ismail Al-Jazari pada tahun 1206. Al-Jazari adalah seorang cendikiawan Muslim Arab dan polimatik yang hidup selama Zaman Keemasan Islam."
    },
    {
      id: 3,
      name: "ALBERT EINSTEIN",
      gambar: "https://image.jpnn.com/resize/570x380-80/arsip/watermark/2020/05/02/albert-einstein-foto-harris-and-ewing-collectionlibrary-of-congress-washington-dc-18.jpg",
      history: "Albert Einstein adalah fisikawan teoretis kelahiran Jerman,secara luas diakui sebagai salah seorang fisikawan terhebat sepanjang masa. Einstein terkenal atas pengembangan teori relativitas, tetapi ia juga membuat konstribusi penting terhadap pengembangan teori mekanika kuantum"
    }
  ]


  const navigate = useNavigate();
  const navigateAddress = (content) => {
    navigate(`address/${content.id}`, {
      replace: true,
      state: { form: content },
    });
  };

  return (
    post.map(({ id, name, history, gambar }) => {
      return <div class="container-fluid" onClick={() => {
        navigateAddress({ id, name, history, gambar })
      }} style={ukuran} key={id}>{id}.{name} </div>
    })
  );
}

export default HomePage;