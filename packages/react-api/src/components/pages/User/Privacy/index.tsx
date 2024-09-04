import React, { FC } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

import s from '../User.module.scss';

import { Button } from '#/components/atoms';

const Privacy: FC = () => {
    const navigate: NavigateFunction = useNavigate();
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <Button
                    onClick={() => navigate('/')}
                    className={s.btnBack}
                >
                    <FontAwesomeIcon
                        icon={faArrowAltCircleLeft}
                        className={s.btnBack_icon}
                    />
                    <span>Back to Diep</span>
                </Button>
                <div className={s.text}>
                    <h1>Diep.io Privacy Policy</h1>
                    <h4>Updated October 31st, 2022.</h4>
                    <p>
                        This Policy for the processing of personal data (hereinafter referred to as the
                        &#34;Policy&#34;) is applicable to Software products (hereinafter referred to as the
                        &#34;Game&#34;, &#34;Games&#34;) developed, published and/or administered under the control of
                        &#34;Shockwave LLC&#34; ( located at the address: Suite 200, 15332 Antioch Street Los Angeles,
                        California 90272, USA, hereinafter referred to as the &#34;Company&#34;), as well as other
                        services of the Company, directly related to the Games, and approved by the Company&apos;s order
                        issued on the 1st of November, 2018.
                    </p>
                    <hr />
                    <h2>PREAMBLE</h2>
                    <p>
                        The Company as part of its activities, namely, the publication, distribution and management of
                        Games through the Internet, access information that is confidential, as well as accesses the
                        personal data of individuals using the Games (hereinafter referred to as the &#34;User&#34;.
                        <br />
                        <br />
                        The Company may need to obtain from the Users certain information and personal data for the
                        purpose of properly identifying Users in the Games and meeting the terms of the User Agreement.
                        In doing so, the Company confirms that such confidential information and/or data are subject to
                        protection against unauthorized distribution.
                    </p>
                    <h2>INFORMATION AND DATA OBTAINED BY THE COMPANY</h2>
                    <p>
                        By using the Games, including passing the registration procedure (if applicable), sending
                        messages, letters and otherwise interacting with the Company, the User provides the Company with
                        some information and data that are personal. Starting the use of the Games, the User agrees that
                        the Company can collect, store and process the personal data of the Users, including the
                        surname, first name, patronymic, photo (avatar in social networks), login, password, ID from
                        social networks, IP-addresses , Cookie files, e-mail address for the purposes of executing the
                        User Agreement.
                        <br />
                        <br />
                        The User undertakes not to collect, use or post personal data of third parties in the Game and
                        any of its services without their consent, including surnames, names, patronymics, phone
                        numbers, e-mail addresses, residential addresses, passport data or other information.
                        <br />
                        <br />
                        The User is responsible for the safety of his authorization data, including the login and
                        password for accessing the User account in the Game or to any of its services.
                        <br />
                        <br />
                        It is not recommended for the User to communicate to third parties his personal data during the
                        registration process and other actions performed with the use of the Games as well as other
                        personal information, including telephone numbers, addresses, bank account numbers and other
                        information and data that the User considers confidential.
                        <br />
                        <br />
                        The User agrees that in the process of managing the Games, the Company also receives certain
                        technical and in-game information relating, in particular, to the User&apos;s activity when
                        using the Games, including:
                    </p>
                    <ul>
                        <li>information about entering the Game (entry time and number of entries);</li>
                        <li>in-game locations visited by the User when using the Game;</li>
                        <li>acquired and (or) sold items in the course of using the Game;</li>
                        <li>use of activated and / or non-activated game data and commands;</li>
                        <li>missions (tasks) accepted by the User for execution;</li>
                        <li>missions (tasks) completed by the User;</li>
                        <li>the number of game actions committed by the User in conjunction with other Users;</li>
                        <li>the number of invitations sent by the User to other Users;</li>
                        <li>the amount of the User&apos;s virtual in-game currency;</li>
                        <li>the amount of earned and/or acquired virtual in-game currency.</li>
                    </ul>
                    <p></p>
                    <h2>USE OF INFORMATION AND DATA OBTAINED BY THE COMPANY</h2>
                    <p>
                        The Company is entitled to use the information and data received from the User for the following
                        purposes:
                    </p>
                    <ul>
                        <li>to manage the Account of the User;</li>
                        <li>to provide the User with access to the Games;</li>
                        <li>to provide the User with additional information and materials for the Games;</li>
                        <li>
                            to provide the User with access to additional services, including services to which the User
                            has subscribed;
                        </li>
                        <li>to ensure communication between Users;</li>
                        <li>for the customer support service;</li>
                        <li>to modify, supplement and improve the Games.</li>
                    </ul>
                    <p></p>
                    <h2>COMMITMENT TO PRESERVE THE CONFIDENTIALITY AND DISCLOSURE OF INFORMATION AND DATA</h2>
                    <p>
                        The Company undertakes to store information and data received from the User, taking all
                        necessary legal, organizational and technical measures to protect such information and from
                        unauthorized or accidental access to them, destruction, modification, blocking, copying,
                        provision, distribution as well as from other illegal actions in respect of such information and
                        personal data. The Company also undertakes to take all measures to prevent the disclosure or use
                        of information and data in any other way, except as expressly provided in this Policy.
                        <br />
                        <br />
                        Access to the information of the User, including personal data, can only be obtained from
                        employees, consultants and auditors of the Company who are required to access such information
                        to perform their duties, with the necessary measures to protect the confidentiality of such
                        information.
                        <br />
                        <br />
                        The Company has the right to disclose to third parties information and data provided by the
                        User, only with the consent of the latter. The User agrees that the Company may disclose
                        information about the User to third parties in the following cases:
                    </p>
                    <ul>
                        <li>to provide the User with additional information and services;</li>
                        <li>to ensure the financial operations carried out by the User when using the Games;</li>
                        <li>
                            in the event that such disclosure is necessary for the administration of justice, the
                            enforcement of a judicial act, under the act of another body or official subject to
                            enforcement in accordance with the legislation of the United States.
                        </li>
                    </ul>
                    <br />
                    <br />
                    <p>
                        The Company keeps the information and personal data of the User until it is necessary for the
                        purposes of executing the User Agreement, compliance with the requirements of the legislation,
                        as well as execution of the relevant court decisions. The person who is responsible for the
                        processing of personal data in the Company: Name, position, e-mail.
                    </p>
                    <h2>RECEIVING AND USE OF CONFIDENTIAL INFORMATION AND DATA RECEIVED FROM MINORS</h2>
                    <p>
                        The Company, acting in good faith, does not accept or collect intentionally any information and
                        data on persons who have not reached the age specified by the legislation of their country of
                        residence (location), to use services similar to the Games developed and/or under the
                        administration (control) of the Company, including the name, surname, address, telephone number
                        and/or e-mail address.
                        <br />
                        <br />
                        The persons who have not reached the specified age can not use the Games as well as provide
                        their information and data without the consent of the parents or the persons who replace them.
                    </p>
                    <h2>TECHNICAL INFORMATION (cookies)</h2>
                    <p>
                        Cookies are used (cookies mean small files that are stored on the user&apos;s computer and
                        contain information about the last operation of the User) in the Games developed and/or
                        controlled by the Company in order to facilitate the authorization procedure, remember the
                        language that the User uses when using Games.
                        <br />
                        <br />
                        The Company has the right to publish cookies and web beacons on its website and on the
                        Games&apos; Websites to collect information about the sections that the User has visited, about
                        the Games and services that the User is interested in, and about the User&apos;s movements
                        through the Games and Company sites. If the User is registered, this information is stored in
                        the Company&apos;s database. The company uses this information to improve the functionality of
                        the Games, to provide Users with additional information and services as well as for other
                        marketing purposes.
                        <br />
                        <br />
                        The User has the right to independently regulate the use of cookies in the browser that she/he
                        uses. In this case, disabling the use of cookies, the User in some cases will not be able to
                        fully use all the functions of the game.
                    </p>
                    <h2>ACTION OF THIS POLICY AND RESOURCES OF THIRD PARTIES</h2>
                    <p>
                        The provisions of this Policy apply only to Games developed, published and/or controlled by the
                        Company. At the same time, the Company specifically stipulates that in some games hyperlinks and
                        banners belonging to third parties are used, including those that lead to third-party sites. The
                        Company does not guarantee the User&apos;s compliance with the provisions of this Policy on such
                        sites and is not responsible for the disclosure by the User of confidential companies to serve
                        ads when you visit our Web site. These companies may use information and/or personal data on
                        such sites.
                        <br />
                        <br />
                        We use third-party advertising information (not including your name, address, email address or
                        telephone number) about your visits to this and other Web sites in order to provide
                        advertisements about goods and services of interest to you. If you would like more information
                        about this practice and to know your choices about not having this information used by these
                        companies, <a href='http://www.networkadvertising.org/managing/opt_out.asp'>click here</a>
                        (http://www.networkadvertising.org/managing/opt_out.asp)
                    </p>
                    <p>
                        All or partial advertising on this Website or App is managed by Playwire LLC. If Playwire
                        publisher advertising services are used, Playwire LLC may collect and use certain aggregated and
                        anonymized data for advertising purposes. To learn more about the types of data collected, how
                        data is used and your choices as a user, please visit
                        <a href='https://www.playwire.com/privacy-policy'>https://www.playwire.com/privacy-policy</a>.
                    </p>
                    <h2>USER ACCESS AND CHANGE OF INFORMATION AND DATA</h2>
                    <p>
                        The User has the right to access all his personal information and data stored in the
                        Company&apos;s databases. The User has the right to prohibit the Company from using, or request
                        deletion of the information and data mentioned in this Policy by writing a letter to the
                        Company&apos;s e-mail address: support@shockwave.com However, after receiving such a prohibition
                        from the User, the Company can not guarantee the User will have unimpeded and full access to the
                        Games and other services of the Company.
                        <br />
                        <br />
                        Information and data may be changed by the User at any time subject to the restrictions
                        mentioned in this Policy.
                    </p>
                    <h2>Account Termination</h2>
                    <p>We reserve the right to deactivate your PRODUCT account at any time, if:</p>
                    <ul>
                        <li>You are found cheating or modifying the game in any way,</li>
                        <li>You use bots or alternative methods to get multiple accounts in the same game,</li>
                        <li>You share your account with other players,</li>
                        <li>You request an abusive refund on one of our payment systems,</li>
                        <li>You use an ad blocker.</li>
                        <li>
                            We will not accept any form of insult, threat, racism in any way whatsoever under penalty of
                            banning your account and legal action in the most serious cases.
                        </li>
                    </ul>
                    <p></p>
                    <h2>AMENDMENTS TO THE POLICY AND APPLICABLE LAW</h2>
                    <p>
                        The Company reserves the right to amend this Policy at any time, including due to changes in
                        law.
                        <br />
                        <br />
                        This Policy as well as any disputes that may arise between the User and the Company are governed
                        by the legislation of the United States without regard to conflicts of law and regardless of the
                        location of the User.
                        <br />
                        Diep.io uses 3rd party vendors for software and account related features. By using this site,
                        you agree to <a href='https://rivet.gg/privacy'>Rivet&apos;s privacy policy</a>.
                        (https://rivet.gg/privacy/)
                    </p>
                </div>
            </div>
        </div>
    );
};

export { Privacy };
