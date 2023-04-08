import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div className="bg-light p-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>nelixair | About us</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="lg:pr-24 lg:pl-24">
        <h2 className="pt-10 underline underline-offset-8 font-poppins font-semibold text-4xl text-center text-primaryLight">
          About us
        </h2>
        <p className="font-poppins text-xl text-left pt-6 pb-6 leading-relaxed">
          Bonjour à toutes et tous, Je suis très heureux de vous présenter
          l'Association{" "}
          <span className="text-primaryLight font-semibold">NELIXAIR</span>.{" "}
          <br />
          Nous sommes une communauté passionnée par l'aviation, la gestion d'une
          compagnie aérienne virtuelle et nous avons à cœur de mettre à
          disposition des biens et services immatériels pour tous. <br />
          Notre objectif principal est de créer une communauté forte et
          innovante qui se rassemble autour de notre passion pour l'aviation.
          Nous croyons que notre dévouement à l'innovation et notre engagement
          envers la communauté sont les clés pour atteindre cet objectif. <br />
          Je suis fier de ce que nous avons accompli jusqu'à présent et je suis
          impatient de partager notre vision pour l'avenir avec vous. Je suis
          convaincu que, ensemble, nous pouvons construire une communauté plus
          forte, plus innovante et plus passionnée que jamais. <br />
          Je vous remercie de prendre le temps de lire cette brochure et de
          découvrir ce que NELIXAIR a à offrir. Je suis impatient de travailler
          avec vous pour construire l'avenir de notre communauté passionnée.{" "}
          <br />
          <span className="text-primaryLight font-semibold">
            Merci et bonne mission !
          </span>
        </p>
        <div className="pb-6">
          <p>Houssine Casanova</p>
          <p>Président / CEO</p>
        </div>
      </div>
      <div>
        {" "}
        {/* A mettre en anglais */}
        <Fade cascade damping={0.4}>
          <section className="bg-white lg:pr-24 lg:pl-24 pb-6 rounded-md shadow-md">
            <h3 className="pt-10 pb-10 underline underline-offset-8 font-poppins font-semibold text-2xl text-center text-secondaryLight">
              Vision
            </h3>
            <div className="lg:grid grid-cols-2 gap-10">
              <img
                className="lg:rounded-md shadow-md"
                src="https://cdn.pixabay.com/photo/2012/10/26/01/34/aircraft-63028_960_720.jpg"
                alt=""
              />
              <p className="text-xl p-6 leading-relaxed">
                <span className="text-primaryLight font-semibold">
                  NELIXAIR Association{" "}
                </span>
                est un lieu de rencontre pour les passionnés d'aéronautique.
                Nous croyons que la passion pour l'aéronautique peut rassembler
                les gens et les amener à échanger et à apprendre les uns des
                autres. <br /> Notre association est ouverte à tous les
                passionnés d'aéronautique, quel que soit leur niveau
                d'expérience ou de connaissances. Notre mission est de créer un
                espace où les passionnés d'aéronautique peuvent se réunir,
                échanger des idées et des connaissances, et développer leur
                passion ensemble. <br />
                Nous voulons que notre association soit un lieu où les membres
                peuvent se sentir à l'aise de partager leur intérêt pour
                l'aéronautique, et où ils peuvent être soutenus et inspirés par
                les autres membres de la communauté.
              </p>
            </div>
          </section>
        </Fade>
        <Fade cascade damping={0.4}>
          <section className="bg-light lg:pr-24 lg:pl-24 pb-6">
            <h3 className="pb-10 pt-10 underline underline-offset-8 font-poppins font-semibold text-2xl text-center text-primaryLight">
              Objectif
            </h3>
            <div className="lg:grid grid-cols-2 gap-10">
              <p className="text-xl p-6 leading-relaxed">
                L'objectif principal de{" "}
                <span className="text-primaryLight font-semibold">
                  NELIXAIR Association
                </span>{" "}
                est de créer, gérer, administrer et organiser une compagnie
                aérienne virtuelle portant le nom de NELIXAIR.
                <br />
                Dans un second temps, nous allons mettre en place des événements
                en ligne et en personne pour permettre aux membres de se
                rencontrer et de partager leur passion pour l'aéronautique. Ces
                événements pourront inclure des conférences, des expositions et
                des visites. <br />
                Nous souhaitons également proposer une nouvelle gamme de
                services à destination des utilisateurs de simulateurs de vol.
              </p>
              <img
                className="lg:rounded-md shadow-md"
                src="https://cdn.pixabay.com/photo/2017/08/23/00/04/cockpit-2671082_960_720.jpg"
                alt=""
              />
            </div>
          </section>
        </Fade>
        <Fade cascade damping={0.4}>
          <section className="bg-white lg:pr-24 lg:pl-24 pb-6 rounded-md shadow-md">
            <h3 className="pb-10 pt-10 underline underline-offset-8 font-poppins font-semibold text-2xl text-center text-secondaryLight">
              La VA
            </h3>
            <div className="lg:grid grid-cols-2 gap-10">
              <img
                className="lg:rounded-md shadow-md"
                src="https://cdn.pixabay.com/photo/2016/09/16/14/02/airplane-cockpit-1674074_960_720.jpg"
                alt=""
              />
              <p className="text-xl p-6 leading-relaxed">
                Une compagnie aérienne virtuelle (VA) est une organisation
                structurée qui simule les activités d'une compagnie aérienne
                réelle avec un simulateur. <br />
                Les membres de ces compagnies aériennes virtuelles se
                rassemblent en ligne pour planifier et exécuter des vols
                virtuels sur des simulateurs de vol, tout en respectant les
                règles et les procédures de la vie réelle. <br />
                Les objectifs de ces compagnies aériennes virtuelles peuvent
                inclure la simulation de l'expérience de vol pour les passionnés
                de l'aviation, la formation des membres en matière de gestion de
                la compagnie aérienne, ou encore le développement en ligne des
                compétences théoriques entre les membres. <br />
                En somme, les compagnies aériennes virtuelles visent à offrir
                une expérience de vol simulée amusante et enrichissante pour
                leurs membres.
              </p>
            </div>
          </section>
        </Fade>
        <Fade cascade damping={0.4}>
          <section className="bg-light lg:pr-24 lg:pl-24 pb-6">
            <h3 className="pb-10 pt-10 underline underline-offset-8 font-poppins font-semibold text-2xl text-center text-primaryLight">
              Les pilotes virtuels
            </h3>
            <div className="lg:grid grid-cols-2 gap-10">
              <p className="text-xl p-6 leading-relaxed">
                Un pilote virtuel est une personne qui utilise un simulateur de
                vol pour simuler des vols dans un environnement virtuel. <br />
                Les pilotes virtuels travaillent en équipe avec d'autres pilotes
                virtuels pour planifier et exécuter des vols en ligne, en
                utilisant des avions virtuels et des scénarios de vol réalistes.
                <br />
                Les pilotes virtuels peuvent également améliorer leurs
                compétences en navigation aérienne et en gestion de vol, et
                peuvent également explorer différents types d'avions et de
                destinations. <br />
                Les objectifs des pilotes virtuels incluent de se divertir en
                volant, de développer leurs compétences en aviation, de
                rencontrer d'autres passionnés d'aviation et de participer à des
                activités en ligne avec d'autres pilotes virtuels.
              </p>
              <img
                className="lg:rounded-md shadow-md"
                src="https://cdn.pixabay.com/photo/2017/11/20/20/12/helicopter-2966569_960_720.jpg"
                alt=""
              />
            </div>
          </section>
        </Fade>
        <Fade cascade damping={0.4}>
          <section className="bg-white lg:pr-24 lg:pl-24 pb-6 rounded-md shadow-md">
            <h3 className="pb-10 pt-10 underline underline-offset-8 font-poppins font-semibold text-2xl text-center text-secondaryLight">
              Evolution
            </h3>
            <div className="lg:grid grid-cols-2 gap-10">
              <img
                className="lg:rounded-md shadow-md"
                src="https://cdn.pixabay.com/photo/2014/11/02/10/41/plane-513641_960_720.jpg"
                alt=""
              />

              <p className="text-xl p-6 leading-relaxed">
                L'histoire de{" "}
                <span className="text-primaryLight font-semibold">
                  NELIXAIR Association
                </span>{" "}
                débute en 2016 lorsque quelques amis passionnés d'aéronautique
                ont décidé de se rassembler dans un environnement virtuel pour
                partager leur amour pour ce domaine. Cependant, ce n'est qu'en
                mars 2022 que l'idée d'une compagnie aérienne virtuelle a pris
                forme, avec l'implication de plusieurs personnes dans ce projet.
                <br />
                Bien qu'il y ait eu des difficultés sur le chemin, c'est en
                novembre de la même année que les choses sont devenues plus
                sérieuses avec la fondation de l'association. La mise en place
                d'un environnement professionnel pour les bénévoles en décembre
                a considérablement accéléré le développement de l'association.
                <br />
                Depuis lors, nous avons continué à grandir et à nous épanouir,
                travaillant sans relâche pour atteindre nos objectifs et
                améliorer notre impact sur la communauté. Nous sommes fiers de
                notre histoire et de notre évolution, et nous nous réjouissons
                de poursuivre notre croissance dans les années à venir. Nous
                croyons fermement que l'aéronautique est un domaine riche et
                diversifié qui peut rassembler les gens autour d'une même
                passion, et nous sommes heureux de donner l'opportunité à nos
                membres associatifs de développer leurs compétences
                professionnelles dans ce domaine passionnant. <br />
                Nous sommes impatients de découvrir ce que l'avenir réserve à{" "}
                <span className="text-primaryLight font-semibold">
                  NELIXAIR Association
                </span>
                .
              </p>
            </div>
          </section>
        </Fade>
        <Fade cascade damping={0.4}>
          <section className="bg-light lg:pr-24 lg:pl-24 pb-6">
            <h3 className="pb-10 pt-10 underline underline-offset-8 font-poppins font-semibold text-2xl text-center text-primaryLight">
              Nos valeurs
            </h3>
            <div className="grid lg:grid-cols-2 gap-10">
              <p className="text-xl p-6 leading-relaxed">
                <span className="text-primaryLight font-semibold">
                  NELIXAIR Association
                </span>{" "}
                est guidée par les valeurs fondamentales d'intégrité, de respect
                et de transparence. En tant que bénévoles déterminés, nous
                travaillons ensemble en équipe pour atteindre nos objectifs.
                Nous croyons que sans transparence, il ne peut y avoir de
                confiance et c'est pourquoi nous maintenons une éthique de haute
                moralité dans toutes nos activités.
                <br />
                Nous accordons également une grande importance au respect des
                opinions, des croyances et des cultures de chacun de nos
                membres, de nos partenaires, de nos bénévoles et surtout de
                notre communauté. Nous créons pour eux un environnement sain où
                tout le monde se sent en sécurité et respecté.
                <br />
                Nous sommes fiers de contribuer à une cause qui nous tient à
                cœur et nous nous engageons à travailler ensemble en équipe pour
                atteindre nos objectifs communs et à créer une ambiance positive
                pour tous les membres de l'association. <br />
                Ensemble, nous pouvons faire une différence positive dans notre
                communauté.
              </p>
              <img
                className="lg:rounded-md shadow-md"
                src="https://cdn.pixabay.com/photo/2015/03/05/00/05/airplane-659687_960_720.jpg"
                alt=""
              />
            </div>
          </section>
        </Fade>
        <Fade cascade damping={0.4}>
          <section className="bg-white lg:pr-24 lg:pl-24 pb-6 rounded-md shadow-md">
            <h3 className="pb-10 pt-10 underline underline-offset-8 font-poppins font-semibold text-2xl text-center text-secondaryLight">
              L'engagement
            </h3>
            <div className="lg:grid grid-cols-2 gap-10">
              <img
                className="lg:rounded-md shadow-md"
                src="https://cdn.pixabay.com/photo/2013/08/06/19/13/plane-170272_960_720.jpg"
                alt=""
              />
              <p className="text-xl p-6 leading-relaxed">
                <span className="text-primaryLight font-semibold">
                  NELIXAIR Association
                </span>{" "}
                offre aux bénévoles qui s'engagent une occasion unique de
                développer leurs compétences et d'élargir leur champ
                d'expertise. Nous leur donnons l'opportunité de se spécialiser
                dans un domaine qui les passionne, de participer à des activités
                pertinentes et de découvrir de nouveaux domaines. Les bénévoles
                peuvent également apprendre en travaillant avec des membres de
                l'association ayant des expériences différentes. En s'engageant
                avec nous, ils auront l'occasion de découvrir leurs propres
                limites et de les dépasser, évoluant ainsi professionnellement.
                <br />
                Nous sommes convaincus que l'engagement bénévole est une
                expérience enrichissante, qui profite à la fois au niveau
                personnel et professionnel. Nous sommes heureux de les
                accompagner dans cette aventure et d'offrir ces opportunités
                uniques. Nous croyons que cela renforcera notre association et
                améliorera notre impact sur la communauté.
              </p>
            </div>
          </section>
        </Fade>
      </div>
    </div>
  );
};

export default AboutUs;
