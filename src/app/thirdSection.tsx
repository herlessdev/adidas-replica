import Image from "next/image";

const ThirdSection = ({ dictionary }) => {
  const selections = [
    {
      name: "peru",
      url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_150,w_150/picker_feds_peru_d_6614bd0efd.png",
    },
    {
      name: "argentina",
      url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_150,w_150/picker_feds_argentina_d_8c4dda9a50.png",
    },
    {
      name: "mexico",
      url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_150,w_150/picker_feds_mexico_d_aa2d470404.png",
    },
    {
      name: "colombia",
      url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_150,w_150/football_fw22_federations_plp_club_picker_colombia_d_62d44b70ac.png",
    },
    {
      name: "chile",
      url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_150,w_150/picker_feds_chile_d_7618059fc2.png",
    },
    {
      name: "alemania",
      url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_150,w_150/picker_feds_germany_d_3554c1f321.png",
    },
    {
      name: "italia",
      url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_150,w_150/picker_feds_italia_d_f97d7a96e3.png",
    },
    {
      name: "espana",
      url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_150,w_150/picker_feds_spain_d_0f05999a63.png",
    },
    {
      name: "belgica",
      url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_150,w_150/picker_feds_belgium_d_80467ff277.png",
    },
  ];
  const teams = [
    {
      name: "river_plate",
      url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_150,w_150/river_picker_d_6ff992d997.png",
    },
    {
      name: "boca_juniors",
      url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_150,w_150/boca_picker_d_d79ba1ad5a.png",
    },
    {
      name: "arsenal",
      url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_150,w_150/arsenal_d_34cda16867.png",
    },
    {
      name: "real_madrid",
      url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_150,w_150/realmadrid_d_25938de7d8.png",
    },
    {
      name: "manchester united",
      url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_150,w_150/manchester_d_44765e0ca4.png",
    },
    {
      name: "juventus",
      url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_150,w_150/juventus_d_29d6017607.png",
    },
    {
      name: "fc_bayern_munchen",
      url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_150,w_150/bayer_d_3b14548aff.png",
    },
  ];
  return (
    <section className="flex flex-col gap-12 py-6 px-16">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="text-center text-sm tracking-wider">
          {dictionary?.selection}
        </p>
        <div className="flex gap-4">
          {selections?.map((selection, i) => (
            <Image
              key={i}
              src={selection?.url}
              alt={selection?.name}
              height={50}
              width={100}
              style={{ width: "auto", height: "50px" }}
              className="object-contain"
              fill={false}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="text-center text-sm tracking-wider">{dictionary?.team}</p>
        <div className="flex gap-4">
          {teams?.map((team, i) => (
            <Image
              key={i}
              src={team?.url}
              alt={team?.name}
              height={50}
              width={100}
              style={{ width: "auto", height: "50px" }}
              className="object-contain"
              fill={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
