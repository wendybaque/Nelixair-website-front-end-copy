// Based on : https://headlessui.com/react/disclosure

import React from "react";
import { Helmet } from "react-helmet";
import { Disclosure, Transition } from "@headlessui/react";

// Downloaded MUI icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const RGPD = () => {
  return (
    <div className="bg-light">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nelixair | Legals mentions</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="pt-10 underline underline-offset-8 font-poppins font-semibold text-4xl text-center text-primaryLight">
        POLITIQUE DE CONFIDENTIALITÉ ET D'UTILISATION DES DONNÉES PERSONNELLES
        NELIXAIR
      </h2>
      <p className="font-poppins text-center pt-6">
        Responsable: DÉPARTEMENT EXÉCUTIF
      </p>
      <p className="font-poppins text-center pt-6">
        RNA : W832021074 SIRET : 92252213100015
      </p>
      <div className="font-poppins p-10 lg:grid grid-cols-1 gap-4">
        <Disclosure>
          {({ open }) => (
            /* Use the `open` state to conditionally change the direction of an icon. */
            <>
              <Disclosure.Button className="font-bold p-2 hover:bg-contrast rounded-md">
                I. Définitions des termes utilisés dans la politique de
                confidentialité
                <ChevronRightIcon
                  className={
                    open
                      ? "m-2 rotate-90 transform rounded-full text-dark"
                      : "rounded-full text-dark m-2"
                  }
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="bg-white rounded-md shadow-md p-4">
                  <span className="font-bold">
                    On désignera dans la suite de ce document les termes
                    suivants:
                  </span>{" "}
                  <br />
                  - « Donnée personnelle » : se définit comme toute information
                  relative à une personne physique identifiée ou qui peut être
                  identifiée, directement ou indirectement, par référence à un
                  numéro d'identification ou à un ou plusieurs éléments qui lui
                  sont propres, conformément à la loi Informatique et libertés
                  du 6 janvier 1978. <br />
                  - « Service » : le service nelixiar.com et l'ensemble de ses
                  contenus. <br />
                  - « Editeur » ou « Nous » : personne morale ou physique
                  responsable de l'édition et du contenu du Service. <br />- «
                  Utilisateur » ou « Vous » : l'internaute visitant et utilisant
                  le Service.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            /* Use the `open` state to conditionally change the direction of an icon. */
            <>
              <Disclosure.Button className="font-bold p-2 hover:bg-contrast rounded-md">
                II. Politique de confidentialité
                <ChevronRightIcon
                  className={
                    open
                      ? "m-2 rotate-90 transform rounded-full text-dark"
                      : "rounded-full text-dark m-2"
                  }
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="bg-white rounded-md shadow-md p-4">
                  {/* Articles panel  */}
                  {/* Article 1 */}
                  <div>
                    <Disclosure>
                      {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <>
                          <Disclosure.Button>
                            <span className="font-bold">
                              Article 1 - Introduction et rôle de la Politique
                              de confidentialité
                            </span>{" "}
                            <ChevronRightIcon
                              className={
                                open
                                  ? "m-2 rotate-90 transform rounded-full bg-secondaryDark text-white"
                                  : "rounded-full bg-secondaryDark text-white m-2"
                              }
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <br />
                            La présente charte vise à vous informer des
                            engagements du Service à l'égard au respect de votre
                            vie privée et à la protection des Données
                            personnelles vous concernant, collectées et traitées
                            à l'occasion de votre utilisation du Service. Il est
                            important que vous lisiez la présente politique de
                            confidentialité afin que vous soyez conscient des
                            raisons pour lesquelles nous utilisons vos données
                            et comment nous le faisons. <br />
                            En vous inscrivant sur le Service, vous vous engagez
                            à nous fournir des informations véritables vous
                            concernant. La communication de fausses informations
                            est contraire aux conditions générales figurant sur
                            le Service. Veuillez noter que la présente Politique
                            de confidentialité est susceptible d’être modifiée
                            ou complétée à tout moment, notamment en vue de se
                            conformer à toute évolution législative,
                            réglementaire, jurisprudentielle ou technologique.
                            La date de sa mise à jour sera clairement
                            mentionnée, le cas échéant. Ces modifications vous
                            engagent dès leur mise en ligne et nous vous
                            invitons donc à consulter régulièrement la présente
                            Politique de confidentialité afin de prendre
                            connaissance d'éventuelles modifications.
                            <br />
                            Vous trouverez également la description de vos
                            droits à la protection de la vie privée et la façon
                            dont la loi vous protège. <br />
                            Si vous avez des questions concernant la présente
                            politique de confidentialité ou si vous voulez
                            exercer vos droits tels que décrit à l’article 10 de
                            la présente Politique de confidentialité, veuillez
                            nous contacter par courriel à l’adresse :
                            legal@nelixair.com <br /> <br />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                  {/* Article 2 */}
                  <div>
                    <Disclosure>
                      {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <>
                          <Disclosure.Button>
                            <span className="font-bold">
                              Article 2 - Données collectées sur le Site
                            </span>{" "}
                            <ChevronRightIcon
                              className={
                                open
                                  ? "m-2 rotate-90 transform rounded-full bg-secondaryDark text-white"
                                  : "rounded-full bg-secondaryDark text-white m-2"
                              }
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <br />
                            Les Données collectées et ultérieurement traitées
                            par le Service sont celles que vous nous transmettez
                            volontairement en remplissant les différents
                            formulaires présents et aux applications utilisées
                            par notre service. Pour certaines opérations sur les
                            contenus, vous pourrez être amenés à transmettre des
                            données vous concernant à des tiers partenaires au
                            travers de leurs propres services, plus
                            spécifiquement lors de l’inscription.
                            <br />
                            Les informations sont stockées jusqu'à la demande
                            d’une suppression de compte sur notre service. Nous
                            ne partageons aucune donnée à caractère personnel à
                            des tiers ou publiquement sans une autorisation de
                            la personne concernée. Ladite personne peut à tout
                            moment changer les paramètres de publications de ses
                            données au niveau de son profil d'utilisateur.
                            <br />
                            Les adresses IP ne sont pas collectées. <br />
                            La personne inscrite est susceptible de fournir à
                            tout moment des données dites « sensibles » à des
                            fins de vérification sous peine de voir certaines
                            fonctionnalités de son compte restreintes. <br />{" "}
                            <br />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                  {/* Article 3 */}
                  <div>
                    <Disclosure>
                      {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <>
                          <Disclosure.Button>
                            <span className="font-bold">
                              Article 3 - Identité du responsable du traitement
                              des données
                            </span>{" "}
                            <ChevronRightIcon
                              className={
                                open
                                  ? "m-2 rotate-90 transform rounded-full bg-secondaryDark text-white"
                                  : "rounded-full bg-secondaryDark text-white m-2"
                              }
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <br />
                            Le responsable du traitement est sous l’accord du
                            CEO.
                            <br /> <br />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                  {/* Article 4 */}
                  <div>
                    <Disclosure>
                      {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <>
                          <Disclosure.Button>
                            <span className="font-bold">
                              Article 4 - Finalité des Données collectées
                            </span>{" "}
                            <ChevronRightIcon
                              className={
                                open
                                  ? "m-2 rotate-90 transform rounded-full bg-secondaryDark text-white"
                                  : "rounded-full bg-secondaryDark text-white m-2"
                              }
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <br />
                            Les Données identifiées comme étant obligatoires sur
                            les formulaires du service sont nécessaires afin de
                            pouvoir bénéficier à l’entièreté du service, et plus
                            spécifiquement des opérations sur les contenus
                            proposés au sein de celui-ci. <br />
                            Le service est susceptible de collecter et traiter
                            les données de ses utilisateurs : Aux fins de vous
                            fournir les informations ou les services auxquels
                            vous avez souscrit, notamment : envoi de newsletter,
                            envoi de notifications par courrier électronique,
                            contact d’un utilisateur pour une inscription ou
                            information, ou une demande liée à un service
                            proposé par NELIXAIR.
                            <br />
                            Afin de recueillir des informations nous permettant
                            d’améliorer notre service, nos événements et
                            fonctionnalités techniques. <br />
                            Afin de pouvoir vous contacter à propos de votre
                            inscription au sein de notre compagnie virtuelle de
                            simulation de vol. <br /> <br />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                  {/* Article 5 */}
                  <div>
                    <Disclosure>
                      {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <>
                          <Disclosure.Button>
                            <span className="font-bold">
                              Article 5 - Destinataires et utilisation des
                              Données collectées
                            </span>{" "}
                            <ChevronRightIcon
                              className={
                                open
                                  ? "m-2 rotate-90 transform rounded-full bg-secondaryDark text-white"
                                  : "rounded-full bg-secondaryDark text-white m-2"
                              }
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <br />
                            Les données collectées par nos soins sont traitées
                            pour les besoins d’exécution des opérations sur les
                            contenus de notre service virtuel.
                            <br />
                            Vous êtes susceptible de recevoir des
                            alertes/notifications électroniques (emails) de
                            notre service selon les autorisations accordées sur
                            votre compte utilisateur. <br />
                            <br />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                  {/* Article 6 */}
                  <div>
                    <Disclosure>
                      {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <>
                          <Disclosure.Button>
                            <span className="font-bold">
                              Article 6 - Fondements légaux régissant le
                              traitement des données
                            </span>{" "}
                            <ChevronRightIcon
                              className={
                                open
                                  ? "m-2 rotate-90 transform rounded-full bg-secondaryDark text-white"
                                  : "rounded-full bg-secondaryDark text-white m-2"
                              }
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <br />
                            Conformément au Règlement Général sur la Protection
                            des Données (RGPD), NELIXAIR ne traite des données à
                            caractère personnel que dans le cadre suivant:{" "}
                            <br />
                            - Avec votre consentement.
                            <br />- Lorsqu'il existe une obligation
                            contractuelle. <br />
                            - Pour répondre à une obligation légale (en vertu de
                            la législation UE ou nationale). <br />
                            <br />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                  {/* Article 7 */}
                  <div>
                    <Disclosure>
                      {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <>
                          <Disclosure.Button>
                            <span className="font-bold">
                              Article 7 - Sécurité des Données
                            </span>{" "}
                            <ChevronRightIcon
                              className={
                                open
                                  ? "m-2 rotate-90 transform rounded-full bg-secondaryDark text-white"
                                  : "rounded-full bg-secondaryDark text-white m-2"
                              }
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <br />
                            Vous êtes informés que vos données pourront être
                            divulguées en application d'une loi, d'un règlement
                            ou en vertu d'une décision d'une autorité
                            réglementaire ou judiciaire compétente ou encore, si
                            cela s'avère nécessaire, aux fins, pour l'Éditeur,
                            de préserver ses droits et intérêts. <br />
                            Nous avons mis en place des mesures de sécurité
                            appropriées afin d’empêcher que vos données
                            personnelles ne soient accidentellement perdues,
                            utilisées, modifiées, dévoilées ou consultées sans
                            autorisation. De plus, l’accès à vos données
                            personnelles est soumis à une procédure de sécurité
                            définie et documentée. <br /> <br />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                  {/* Article 8 */}
                  <div>
                    <Disclosure>
                      {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <>
                          <Disclosure.Button>
                            <span className="font-bold">
                              Article 8 - Durée de conservation des données
                            </span>{" "}
                            <ChevronRightIcon
                              className={
                                open
                                  ? "m-2 rotate-90 transform rounded-full bg-secondaryDark text-white"
                                  : "rounded-full bg-secondaryDark text-white m-2"
                              }
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <br />
                            Les Données sont stockées chez l'hébergeur du
                            service, dont les coordonnées figurent dans les
                            mentions légales de ce service (hostinger.fr), et
                            sont conservées pour la durée strictement nécessaire
                            à la réalisation des finalités visées ci-avant et ne
                            sauraient excéder la suppression du compte. Au-delà
                            de cette durée, elles seront conservées à des fins
                            exclusivement statistiques et ne donneront lieu à
                            aucune exploitation, de quelque nature que ce soit.
                            <br /> <br />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                  {/* Article 9 */}
                  <div>
                    <Disclosure>
                      {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <>
                          <Disclosure.Button>
                            <span className="font-bold">
                              Article 9 – Prestataires habilités et transfert
                              vers un pays tiers de l’Union Européenne
                            </span>{" "}
                            <ChevronRightIcon
                              className={
                                open
                                  ? "m-2 rotate-90 transform rounded-full bg-secondaryDark text-white"
                                  : "rounded-full bg-secondaryDark text-white m-2"
                              }
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <br />
                            NELIXAIR vous informe qu’il a recours à des
                            prestataires habilités pour faciliter le recueil et
                            le traitement des données que vous nous avez
                            communiquées. Ces prestataires peuvent être situés
                            en dehors de l’Union Européenne et ont communication
                            des données recueillies par le biais des divers
                            formulaires présents sur le service. Notre service
                            s’est préalablement assuré de la mise en œuvre par
                            ses prestataires de garanties adéquates et du
                            respect de conditions strictes en matière de
                            confidentialité, d’usage et de protection des
                            données. Tout particulièrement, la vigilance s’est
                            portée sur l’existence d’un fondement légal pour
                            effectuer un quelconque transfert de données vers un
                            pays tiers. A ce titre, certains de nos prestataires
                            sont soumis à des règles internes d’entreprise (ou «
                            Binding Corporate Rules ») qui ont été approuvées
                            par la CNIL en 2016 quand les autres obéissent non
                            seulement à des Clauses Contractuelles Types mais
                            également au Privacy Shield. <br /> <br />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                  {/* Article 10 */}
                  <div>
                    <Disclosure>
                      {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <>
                          <Disclosure.Button>
                            <span className="font-bold">
                              Article 10 - Droits informatiques et libertés
                            </span>{" "}
                            <ChevronRightIcon
                              className={
                                open
                                  ? "m-2 rotate-90 transform rounded-full bg-secondaryDark text-white"
                                  : "rounded-full bg-secondaryDark text-white m-2"
                              }
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <br />
                            Conformément à la législation sur la protection des
                            données personnelles, vous avez les droits détaillés
                            ci-après que vous pouvez exercer, comme indiqué à
                            l’Article 1 de la Présente Politique de
                            confidentialité en nous écrivant un courriel à:
                            legal@nelixair.com
                            <br />
                            - Le droit d’information : nous avons l’obligation
                            de vous informer de la manière dont nous utilisons
                            vos données personnelles (tel que décrit dans la
                            présente politique de confidentialité).
                            <br />
                            - Le droit d’accès : c’est votre droit d’effectuer
                            une demande d’accès aux données vous concernant afin
                            de recevoir une copie des données à caractère
                            personnel que nous détenons. Toutefois, en raison de
                            l’obligation de sécurité et de confidentialité dans
                            le traitement des données à caractère personnel qui
                            incombe à la NELIXAIR, vous êtes informé que votre
                            demande sera traitée sous réserve que vous apportiez
                            la preuve de votre identité, notamment par la
                            production d’un scan ou d’une photocopie de votre
                            titre d’identité valide.
                            <br />
                            - Le droit de rectification : le droit de nous
                            demander de rectifier des données personnelles vous
                            concernant qui seraient incomplètes ou inexactes. Au
                            titre de ce droit, la législation vous autorise à
                            demander la rectification, la mise à jour, le
                            verrouillage ou encore l’effacement des données vous
                            concernant qui peuvent être inexactes, erronées,
                            incomplètes ou obsolètes.
                            <br />
                            - Le droit à l’effacement, aussi connu sous le nom
                            de « droit à l’oubli » : dans certains cas, vous
                            pouvez nous demander de supprimer les données
                            personnelles que nous avons vous concernant (mis à
                            part s’il existe une raison juridique impérieuse qui
                            nous oblige à les conserver).
                            <br />
                            - Le droit à la limitation du traitement : vous avez
                            le droit dans certains cas de nous demander de
                            suspendre le traitement des données personnelles par
                            la suppression de votre compte utilisateur et la fin
                            de l’utilisation de notre service nelixair.com.
                            <br />
                            - Le droit à la portabilité des données : vous avez
                            le droit de nous demander une copie de vos données
                            personnelles dans un format courant (par exemple un
                            fichier .csv).
                            <br />
                            - Le droit d’opposition : vous avez le droit de vous
                            opposer au traitement de vos données personnelles
                            par la suppression de votre compte utilisateur et la
                            fin de l’utilisation de notre service nelixair.com.
                            <br />
                            Cependant, l’exercice de ce droit n’est possible que
                            dans l’une des deux situations suivantes :<br />
                            - lorsque l’exercice de ce droit est fondé sur des
                            motifs légitimes
                            <br />
                            - lorsque l’exercice de ce droit vise à faire
                            obstacle à ce que les données recueillies soient
                            utilisées à des fins de prospection commerciale.
                            <br />
                            Contactez-nous si vous souhaitez exercer l’un des
                            droits décrits ci-dessus en nous écrivant un
                            courriel à : legal@nelixair.com Vous n’aurez pas de
                            frais à payer pour l’accès à vos données
                            personnelles (ni pour l’exercice de tout autre
                            droit). Néanmoins, nous pourrons vous facturer des
                            frais raisonnables si votre demande est
                            manifestement infondée, répétitive ou excessive.
                            Dans ce cas, nous pouvons aussi refuser de répondre
                            à votre demande.
                            <br />
                            Le CEO sera en droit, le cas échéant, de s’opposer
                            aux demandes manifestement abusives par leur
                            caractère systématique, répétitif, ou leur nombre.
                            <br />
                            Nous pouvons vous demander des informations
                            spécifiques afin de confirmer votre identité et
                            d’assurer votre droit d’accès à vos données
                            personnelles (ou pour exercer tout autre droit). Il
                            s’agit d’une mesure de sécurité pour garantir que
                            ces données personnelles ne soient pas délivrées à
                            une personne non autorisée à les recevoir. Nous
                            pouvons aussi vous contacter pour obtenir plus
                            d’informations concernant votre demande, afin de
                            vous donner une réponse plus rapide.
                            <br />
                            Nous essayons de répondre à toutes les demandes
                            légitimes dans un délai d’un mois. Ce délai d’un
                            mois peut être dépassé dans le cas où votre demande
                            est particulièrement complexe ou si vous en avez
                            fait plusieurs. Dans ce cas, nous vous préviendrons
                            et vous tiendrons informé. <br />
                            <br />
                            <br />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                  {/* Article 11 */}
                  <div>
                    <Disclosure>
                      {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <>
                          <Disclosure.Button>
                            <span className="font-bold">
                              Article 11 - Plainte auprès de l’Autorité de
                              protection des données
                            </span>{" "}
                            <ChevronRightIcon
                              className={
                                open
                                  ? "m-2 rotate-90 transform rounded-full bg-secondaryDark text-white"
                                  : "rounded-full bg-secondaryDark text-white m-2"
                              }
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <br />
                            Si vous considérez que NELIXAIR ne respecte pas ses
                            obligations au regard de vos informations
                            personnelles, vous pouvez adresser une plainte ou
                            une demande auprès de l’autorité compétente. En
                            France, l’autorité compétente est la CNIL à laquelle
                            vous pouvez adresser une demande par voie
                            électronique à l'adresse suivante :
                            https://www.cnil.fr/fr/plaintes/internet.
                            <br /> <br />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                  {/* Article 12.1 */}
                  <div>
                    <Disclosure>
                      {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <>
                          <Disclosure.Button>
                            <span className="font-bold">
                              Article 12.1 - Politique relative aux cookies
                            </span>{" "}
                            <ChevronRightIcon
                              className={
                                open
                                  ? "m-2 rotate-90 transform rounded-full bg-secondaryDark text-white"
                                  : "rounded-full bg-secondaryDark text-white m-2"
                              }
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <br />
                            Lors de votre premier accès après l’ouverture de
                            votre navigateur, vous êtes avertis par un bandeau
                            que des informations relatives à votre navigation
                            sont susceptibles d’être enregistrées dans des
                            fichiers alphanumériques dénommés « cookies ».
                            <br />
                            Notre politique d’utilisation des cookies vous
                            permet de mieux comprendre les dispositions que nous
                            mettons en œuvre en matière de navigation sur notre
                            service. Elle vous informe notamment sur l’ensemble
                            des cookies présents sur notre service, leur
                            finalité et vous donne la marche à suivre pour les
                            paramétrer. <br /> <br />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                  {/* Article 12.2  */}
                  <div>
                    <Disclosure>
                      {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <>
                          <Disclosure.Button>
                            <span className="font-bold">
                              Article 12.2 - Informations générales sur les
                              cookies présents sur le site
                            </span>{" "}
                            <ChevronRightIcon
                              className={
                                open
                                  ? "m-2 rotate-90 transform rounded-full bg-secondaryDark text-white"
                                  : "rounded-full bg-secondaryDark text-white m-2"
                              }
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <br />
                            NELIXAIR, en tant qu’éditeur du présent service,
                            pourra procéder à l’implantation de cookies sur le
                            disque dur de votre terminal (ordinateur, tablette,
                            mobile etc.) afin de vous garantir une navigation
                            fluide et optimale sur notre service.
                            <br />
                            Les « cookies » (ou témoins de connexion) sont des
                            petits fichiers texte de taille limitée qui nous
                            permettent de reconnaître votre ordinateur, votre
                            tablette ou votre mobile aux fins de personnaliser
                            les services que nous vous proposons.
                            <br />
                            Les informations recueillies par le biais des
                            cookies ne permettent en aucune manière de vous
                            identifier nominativement. Elles sont utilisées
                            exclusivement pour nos besoins propres afin
                            d’améliorer l’interactivité et la performance de
                            notre service et de vous adresser des contenus
                            adaptés à vos centres d’intérêts. Aucune de ces
                            informations ne fait l’objet d’une communication
                            auprès de tiers sauf lorsque NELIXAIR a obtenu au
                            préalable votre consentement ou bien lorsque la
                            divulgation de ces informations est requise par la
                            loi, sur ordre d’un tribunal ou toute autorité
                            administrative ou judiciaire habilitée à en
                            connaître.
                            <br />
                            Pour mieux vous éclairer sur les informations que
                            les cookies identifient, vous trouverez un tableau
                            listant les différents types de cookies susceptibles
                            d’être utilisés sur le service de NELIXAIR, leur
                            nom, leur finalité ainsi que leur durée de
                            conservation à l'adresse à venir.
                            <br />
                            <br />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                  {/* Article 12.3 */}
                  <div>
                    <Disclosure>
                      {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <>
                          <Disclosure.Button>
                            <span className="font-bold">
                              Article 12.3 - Configuration de vos préférences
                              sur les cookies
                            </span>{" "}
                            <ChevronRightIcon
                              className={
                                open
                                  ? "m-2 rotate-90 transform rounded-full bg-secondaryDark text-white"
                                  : "rounded-full bg-secondaryDark text-white m-2"
                              }
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <br />
                            Vous pouvez accepter ou refuser le dépôt de cookies
                            à tout moment.
                            <br />
                            Lors de votre utilisation du service nelixair.com,
                            votre page utilisateur présente brièvement des
                            informations relatives au dépôt de cookies et de
                            technologies similaires. Cet accès vous avertit
                            qu’en poursuivant votre navigation sur notre service
                            (en chargeant une nouvelle page nelixair.com ou en
                            cliquant sur divers éléments du Service par
                            exemple), vous acceptez le dépôt de cookies sur
                            votre terminal.
                            <br />
                            <br />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                  {/* Article 12.4 */}
                  <div>
                    <Disclosure>
                      {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <>
                          <Disclosure.Button>
                            <span className="font-bold">
                              Article 12.4 - Les types de cookies nécessitant
                              votre consentement
                            </span>{" "}
                            <ChevronRightIcon
                              className={
                                open
                                  ? "m-2 rotate-90 transform rounded-full bg-secondaryDark text-white"
                                  : "rounded-full bg-secondaryDark text-white m-2"
                              }
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <br />
                            Selon le type de cookie en cause, le recueil de
                            votre consentement au dépôt et à la lecture de
                            cookies sur votre terminal peut être impératif
                            notamment pour ceux qui suivent.
                            <br />- <u>Les cookies exemptés de consentement</u>
                            <br />
                            Conformément aux recommandations de la Commission
                            Nationale de l’Informatique et des Libertés (CNIL),
                            certains cookies sont dispensés du recueil préalable
                            de votre consentement dans la mesure où ils sont
                            strictement nécessaires au fonctionnement du service
                            ou ont pour finalité exclusive de permettre ou
                            faciliter la communication par voie électronique. Il
                            s’agit notamment des cookies d’identifiant de
                            session, d’authentification, de session
                            d’équilibrage de charge ainsi que des cookies de
                            personnalisation de votre interface. Ces cookies
                            sont intégralement soumis à la présente politique
                            dans la mesure où ils sont émis et gérés par notre
                            service.
                            <br />-{" "}
                            <u>
                              Les cookies nécessitant le recueil préalable de
                              votre consentement
                            </u>
                            <br />
                            Cette exigence concerne les cookies émis par des
                            tiers et qui sont qualifiés de « persistants » dans
                            la mesure où ils demeurent dans votre terminal
                            jusqu'à leur effacement ou leur date d’expiration.
                            De tels cookies étant émis par des tiers, leur
                            utilisation et leur dépôt sont soumis à leurs
                            propres politiques de confidentialité dont vous
                            trouverez un lien ci-dessous. Cette famille de
                            cookie regroupe les cookies de mesure d’audience,
                            les cookies publicitaires, auxquels notre service
                            n’a pas recours, ainsi que les cookies de partage de
                            réseaux sociaux (Facebook, YouTube, Twitter,
                            LinkedIn, etc.). Les cookies de partage des réseaux
                            sociaux sont émis et gérés par l’éditeur du réseau
                            social concerné. Sous réserve de votre consentement,
                            ces cookies vous permettent de partager facilement
                            une partie du contenu publié sur le service,
                            notamment par l’intermédiaire d’un « bouton »
                            applicatif de partage selon le réseau social
                            concerné.
                            <br />- <u>Outils de paramétrage des cookies</u>
                            <br />
                            La plupart des navigateurs Internet sont configurés
                            par défaut de façon que le dépôt de cookies soit
                            autorisé. Votre navigateur vous offre l’opportunité
                            de modifier ces paramètres standards de manière que
                            l’ensemble des cookies soit rejeté systématiquement
                            ou bien à ce qu’une partie seulement des cookies
                            soit acceptée ou refusée en fonction de leur
                            émetteur.
                            <br />
                            <br />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                  {/* Article 12.5 */}
                  <div>
                    <Disclosure>
                      {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <>
                          <Disclosure.Button>
                            <span className="font-bold">
                              Article 12.5 - Mise en garde contre l'altération
                              des cookies sur votre terminal
                            </span>{" "}
                            <ChevronRightIcon
                              className={
                                open
                                  ? "m-2 rotate-90 transform rounded-full bg-secondaryDark text-white"
                                  : "rounded-full bg-secondaryDark text-white m-2"
                              }
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <br />
                            Nous attirons votre attention sur le fait que le
                            refus du dépôt de cookies sur votre terminal est
                            néanmoins susceptible d’altérer votre expérience
                            d’utilisateur ainsi que votre accès à certains
                            services ou fonctionnalités du présent service. Le
                            cas échéant, NELIXAIR décline toute responsabilité
                            concernant les conséquences liées à la dégradation
                            de vos conditions de navigation qui interviennent en
                            raison de votre choix de refuser, supprimer ou
                            bloquer les cookies nécessaires au fonctionnement du
                            service. Ces conséquences ne sauraient constituer un
                            dommage et vous ne pourrez prétendre à aucune
                            indemnité de ce fait.
                            <br />
                            Votre navigateur vous permet également de supprimer
                            les cookies existants sur votre terminal ou encore
                            de vous signaler lorsque de nouveaux cookies sont
                            susceptibles d’être déposés sur votre terminal. Ces
                            paramètres n’ont pas d’incidence sur votre
                            navigation mais vous font perdre tout le bénéfice
                            apporté par le cookie.
                            <br />
                            Veuillez ci-dessous prendre connaissance des
                            multiples outils mis à votre disposition afin que
                            vous puissiez paramétrer les cookies déposés sur
                            votre terminal.
                            <br />
                            Chaque navigateur Internet propose ses propres
                            paramètres de gestion des cookies. Pour savoir de
                            quelle manière modifier vos préférences en matière
                            de cookies, vous trouverez ci-dessous les liens vers
                            l’aide nécessaire pour accéder au menu de votre
                            navigateur prévu à cet effet.
                            <br />
                            <br />
                            <hr />
                            <br />
                            Google Chrome:{" "}
                            <a
                              href="https://support.google.com/chrome/answer/95647?hl=fr"
                              alt="Redirect ton Google Chrome"
                              aria-label="Redirect to Google Chrome"
                              rel="noreferrer"
                              target="_blank"
                              className="hover:text-primaryLight"
                            >
                              https://support.google.com/chrome/answer/95647?hl=fr
                            </a>{" "}
                            <br />
                            Internet Explorer:
                            <a
                              href="https://support.microsoft.com/frfr/help/17442/windows-internet-explorer-delete-manage-
                    cookies#ie=ie-11"
                              alt="Redirect ton Internet Explorer"
                              aria-label="Redirect to Internet Explorer"
                              rel="noreferrer"
                              target="_blank"
                              className="hover:text-primaryLight"
                            >
                              https://support.microsoft.com/frfr/help/17442/windows-internet-explorer-delete-manage-
                              cookies#ie=ie-11
                            </a>
                            <br />
                            Mozilla Firefox :
                            <a
                              href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
                              alt="Redirect to Mozilla Firefox"
                              aria-label="Redirect to Mozilla Firefox"
                              rel="noreferrer"
                              target="_blank"
                              className="hover:text-primaryLight"
                            >
                              https://support.mozilla.org/fr/kb/activer-desactiver-cookies
                            </a>
                            <br />
                            Opera:{" "}
                            <a
                              href="http://help.opera.com/Windows/10.20/fr/cookies.html"
                              alt="Redirect to Opera"
                              aria-label="Redirect to Opera"
                              rel="noreferrer"
                              target="_blank"
                              className="hover:text-primaryLight"
                            >
                              http://help.opera.com/Windows/10.20/fr/cookies.html
                            </a>
                            <br />
                            Safari:
                            <a
                              href="ttps://support.apple.com/kb/PH21411?
                    viewlocale=fr_FR&locale=fr_FR"
                              alt="Redirect to Safari"
                              aria-label="Redirect to Safari"
                              rel="noreferrer"
                              target="_blank"
                              className="hover:text-primaryLight"
                            >
                              https://support.apple.com/kb/PH21411?
                              viewlocale=fr_FR&locale=fr_FR
                            </a>
                            <br />
                            <br />
                            <hr />
                            <br />
                            Pour de plus amples informations concernant les
                            outils de maîtrise des cookies, vous pouvez
                            consulter le site internet de la CNIL :
                            https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser.
                            <br />
                            Pour toute interrogation ou demande complémentaire
                            d’informations relative à la présente politique des
                            cookies, merci de bien vouloir nous contacter.
                            <br />
                            <br />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                  {/* Article 12.6 */}
                  <div>
                    <Disclosure>
                      {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <>
                          <Disclosure.Button>
                            <span className="font-bold">
                              Article 12.6 - Description des cookies utilisés
                              par NELIXAIR
                            </span>{" "}
                            <ChevronRightIcon
                              className={
                                open
                                  ? "m-2 rotate-90 transform rounded-full bg-secondaryDark text-white"
                                  : "rounded-full bg-secondaryDark text-white m-2"
                              }
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <br />
                            Liste des cookies du service: <br />
                            - Un cookie de session obligatoire pour
                            l’identification et la permission d’accès à
                            l’utilisateur, de son espace client.
                            <br />
                            - Un cookie de mémoire évite la réapparition du
                            bandeau d’alerte de cookie.
                            <br />
                            <br />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <p className="hover:text-secondaryLight">
          <a
            href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:303c99ab-f8f9-384e-92b7-07fdf19ee33b"
            alt="Redirect to pdf download"
            aria-label="Redirect to pdf download"
            rel="noreferrer"
            target="_blank"
          >
            <PictureAsPdfIcon /> Download the document in pdf{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default RGPD;
