import React, { FC } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

import s from '../User.module.scss';

import { Button } from '#/components/atoms';

const Terms: FC = () => {
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
                    <h1>Diep.io End User License Agreement</h1>
                    <h4>Updated October 31st, 2022.</h4>
                    <p>
                        ATTENTION! YOU ACCEPT THIS END USER LICENSE AGREEMENT AND CONFIRM YOUR CONSENT WITH ALL ITS
                        CONDITIONS WITHOUT LIMITATIONS CONCERNING THE GAME &#34;diep.io&#34; LOCATED AT THE ADDRESS:
                        https://diep.io IF YOU DOWNLOAD, COPY ANY PART OF THE GAME AND (OR) USE IT BY ANY OTHER WAY AND
                        (OR) IF YOU STARTED TO PARTICIPATE IN THE GAME PROCESS IN THIS GAME.
                    </p>
                    <hr />
                    <br />
                    <p>
                        This End user license agreement (hereinafter referred to as the &#34;Agreement&#34;) governs the
                        relationship between &#34;Shockwave LLC&#34;, hereinafter referred to as &#34;Licensor&#34; and
                        you, the Game Licensee (hereinafter referred to as &#34;Licensee&#34;), in relation to the Game.
                    </p>
                    <h2>1. Terms used in this Agreement</h2>
                    <p>
                        1.1. Game is an interactive computer game online, located on the Internet at: https://diep.io
                        which is a computer program and a collection of data, commands and generated audiovisual images
                        (hereinafter referred to as &#34;data&#34; and &#34;commands&#34;), activated sequentially to
                        obtain a certain result by the Licensee provided by the Game script, without making a payment
                        (activated data and commands) or after making a payment (non-activated data and commands). The
                        rights to use data and commands (activated and non-activated) are granted by the Licensor to the
                        Licensee under the terms and conditions specified in this Agreement. The Licensor is the owner
                        of the necessary amount of rights to the Game and to all its elements, taken individually or in
                        combination. The Licensor has the right to use, operate and distribute the Game.
                        <br />
                        <br />
                        In order to ensure the rights and obligations of the parties arising under this Agreement,
                        Licensee reproduces the set of data and commands predetermined by the Licensor on his computer
                        or personal device (the &#34;Game Client&#34;, if provided by the Game functionality), whereas
                        the set of other data and commands (including those non-activated) or all data and commands in
                        case of absence of the client part of the Game are hosted by the Licensor on the servers
                        operated by him and/or third parties.
                    </p>
                    <p>
                        1.2. Game Website is an online site located at https://diep.io and at it&apos;s subdomain
                        addresses that give Licensee access to the Licensor&apos;s resources, including use of the Game
                        by the Licensee. The Licensor places mandatory information for Licensees through messages on
                        Game Website, as well as in other ways that allow to notify Licensees of such information.
                    </p>
                    <p>
                        1.3. Game Resources (Resources) - all servers, any software and/or databases related to the
                        Game, located, among other places, at the domain https://diep.io or via links distributed by the
                        Licensor in the Game itself.
                    </p>
                    <p>
                        1.4. Licensor - &#34;Shockwave LLC&#34;, which grants the Licensee the right to use the Game on
                        the basis of a non-exclusive license and carries out making available to the public,
                        distribution, operation, maintenance, administration of the Game. The Licensor is a Party to
                        this Agreement.
                    </p>
                    <p>
                        1.5. Licensee is an individual who has the necessary legal capacity to enter into this Agreement
                        and who, pursuant to this Agreement, is granted the right to use the Game in accordance with
                        this Agreement. The Licensee is a Party to this Agreement.
                    </p>
                    <p>
                        1.6. Licensee&apos;s Account (Account) is the Licensee&apos;s account created at the time of
                        registration in the Game, allowing the Licensor to account each Licensee and to provide the
                        opportunity to log in (to access) the Game.
                    </p>
                    <p>
                        1.7. Transfer of the Rights to Use the Game means granting the rights to the Licensee by the
                        Licensor to use the Game on the terms of a simple non-exclusive license in the manner specified
                        in this Agreement.
                    </p>
                    <p>
                        1.8. Rights to non-activated data and commands are the rights acquired by Licensee for a fee,
                        allowing the Game to increase the number of in-game items, including through the &#34;Shop&#34;
                        function inside the Game or in other ways. The in-game items are in-game values, including
                        in-game currency of the Game.
                    </p>
                    <p>
                        1.9. Remuneration is a fee to the Licensor for granting the Licensee rights to use non-activated
                        data and commands within the limits established by this Agreement. The amount of Remuneration is
                        determined by the Licensor and depends on the volume of non-activated data and commands, the
                        right of use of which is granted to the Licensee.
                    </p>
                    <p>
                        1.10. The Client&apos;s part of the Game is the software necessary for Licensee&apos;s
                        participation in the Game, which is to be installed on the personal computer and/or the mobile
                        device of the Licensee, or to be used for the participation of the Licensee in the Game. The
                        Client&apos;s part of the Game is installed by the Licensee independently on the personal
                        computer and (or) the device by entering and registering on the Game website: https://diep.io.
                        The Client&apos;s part of the Game may be distributed by the Licensor and/or its authorized
                        persons, both via the Internet and on tangible media. The Client&apos;s part of the Game
                        distributed on the Internet is provided to the Licensee free of charge, with the right to
                        reproduce, unless otherwise provided by this Agreement.
                    </p>
                    <p>
                        1.11. License Agreement - the text of this Agreement between the Licensor and the Licensee,
                        containing all the necessary and material terms of the License Agreement for granting the rights
                        to use the Game as a computer program. Game Rules as well as other documents referred to in this
                        Agreement should be considered as an annex to this Agreement and its integral part.
                    </p>
                    <p>
                        1.12. Game Rules (Rules) - The annex to the License Agreement, located on the Internet at:
                        https://diep.io, regulating the rules of Licensee&apos;s use of the Game, limitations in the
                        actions of the Licensee in relation to the Game. The Game Rules may be changed by the Licensor
                        at any time without prior notice to Licensee. The Licensor notifies the Licensee about these
                        changes by posting information on the Game Website. Licensee&apos;s continued use of the Game
                        after the modification of the Game Rules is recognized by his consent to such changes.
                    </p>
                    <h2>2. Conditions of accession to this Agreement</h2>
                    <p>
                        2.1. Before using the Game, the Licensee is required to review the text of this Agreement as
                        well as all the Rules applicable to the Game and other documents freely available in the
                        Licensee&apos;s Account on the Internet at https://diep.io.
                    </p>
                    <p>
                        2.2. After reviewing this Agreement the Licensee joins (accepts) this Agreement by clicking the
                        &#34;Play&#34; button or the like, which is within the meaning of Art.
                    </p>
                    <p>
                        2.3. The person that was authorized in the Game should be deemed to be the proper user of the
                        Account, access to use and management of which was obtained as a result of the registration of
                        the Account if there is no information confirming otherwise.
                    </p>
                    <h2>3. Subject of the Agreement</h2>
                    <p>
                        3.1. Under this Agreement and subject to Licensee&apos;s compliance with its respective terms,
                        the Licensor grants the Licensee the right to use the Game as software (computer programs) and /
                        or database under the terms of a simple non-exclusive license, within the limits determined by
                        this Agreement.
                    </p>
                    <p>
                        3.2. The Licensee obtains the right to use activated and non-activated data and commands on the
                        terms of this Agreement.
                    </p>
                    <p>
                        3.3. The Licensor&apos;s obligation to grant the rights to use non-activated data and commands
                        is deemed to be performed by the Licensor at the time it reflects in-game values
                        &#34;â€¹&#34;â€¹in the form of the in-game currency of the Game on the Licensee&apos;s Account
                        in the Game. From this moment, the Licensee obtains the rights to use the volume of
                        non-activated data and commands corresponding to the number of in-game values &#34;â€¹&#34;â€¹in
                        the form of the Game&apos;s in-game currency on the terms of this Agreement.
                    </p>
                    <p>
                        3.4. The ratio of the volume of non-activated data and commands to the number of in-game
                        values&#34;â€¹&#34;â€¹in the form of an in-game currency of the Game is determined by the
                        Licensor. The ratio of the amount of reward to the number of in-game values &#34;â€¹&#34;â€¹in
                        the form of in-game currency of the Game is determined by the Licensor.
                    </p>
                    <p>
                        3.5. Payment of the Remuneration is not a prerequisite for Licensee&apos;s participation in the
                        Game and is carried out durante bene placito of the Licensee.
                    </p>
                    <h2>4. Limits of use of the Game</h2>
                    <p>4.1. The Licensee may use the Game as follows:</p>
                    <h5>
                        4.1.1. to participate in the Game by creating an Account and Game&apos;s character, to change
                        the content of the Game during participation in the Game with the mandatory observance of the
                        Game Rules;
                    </h5>
                    <h5>
                        4.1.2. to reproduce the Client&apos;s part of the Game by installing it on a computer (both on a
                        personal computer and/or on a mobile device) in order to participate in the Game;
                    </h5>
                    <h5>4.1.3. to use the activated data and commands to achieve a certain Game outcome scenario;</h5>
                    <h5>
                        4.1.4. to activate Non-activated data and commands after payment of the Remuneration to the
                        Licensor and use them, including the option to achieve a result determined by the Game scenario
                        more quickly or in some other way than by using the right specified in clause 4.1.3;
                    </h5>
                    <h5>4.1.5. to make changes to the Game&apos;s personal settings provided by the Licensor;</h5>
                    <h5>
                        4.1.6. This Agreement does not make a provision for the Licensee to provide reports on use of
                        the Game.
                    </h5>
                    <p>4.2. The Licensee may not:</p>
                    <h5>
                        4.2.1. distribute the Client&apos;s part of the Game or its copies for commercial or
                        non-commercial purposes either by distributing material carriers with it or by posting it on the
                        Internet for downloading by certain persons or an unlimited number of persons;
                    </h5>
                    <h5>4.2.2. translate the Game into other languages;</h5>
                    <h5>
                        4.2.3. distribute any elements of the Game for commercial purposes, including graphic, audio,
                        audiovisual representations of the Game;
                    </h5>
                    <h5>
                        4.2.4. distribute for commercial or non-commercial purposes, transfer to third parties the right
                        to use non-activated data and commands granted to the Licensee for the Remuneration, game
                        characters, game account and other objects not expressly permitted by the terms of this
                        Agreement, and disseminate information on intentions to perform such actions;
                    </h5>
                    <h5>
                        4.2.5. transfer the Licensee&apos;s rights to use the Game, as defined in the article 1 of this
                        Agreement, to other Licensees or to third parties through the conclusion of a sub-license
                        agreement or otherwise;
                    </h5>
                    <h5>
                        4.2.6. use the Game in other ways not provided for in this Agreement, the Game Rules and other
                        means that go beyond the normal gameplay process, including use of Game code errors and other
                        gaps that arise during the use of the Game by the Licensee and contrary to the principles of the
                        Game and this Agreement;
                    </h5>
                    <h5>
                        4.2.7. use the Game to carry out entrepreneurial and (or) other activities that bring material
                        benefits to the Licensee, in particular, it is prohibited to place advertisements and (or) other
                        advertisements related to business and (or) conduct other activities in the Game that bring
                        material benefit to the Licensee;
                    </h5>
                    <h5>4.2.8. use the Account of another user;</h5>
                    <h5>
                        4.2.9. alienate and otherwise transfer the Account, acquire the Account of another user,
                        including through exchange or gift;
                    </h5>
                    <h5>
                        4.2.10. use automated scripts to collect information or other kind of interaction with the Game;
                    </h5>
                    <h5>4.2.11. use information of other users to send unsolicited information (spam);</h5>
                    <h5>
                        4.2.12. make available objects of intellectual property in the Game without the consent of their
                        rightsholders;
                    </h5>
                    <h5>
                        4.2.13. distribute personal information and personal data of third parties in the Game without
                        their consent, including home addresses, telephones and passport details;
                    </h5>
                    <h5>
                        4.2.14. distribute commercial offers, propaganda and any other intrusive information in the
                        Game, except as permitted by the Licensor;
                    </h5>
                    <h5>
                        4.2.15. distribute materials in the Game that offend or humiliate the honor and dignity of other
                        users or third parties as well as distribute links to such materials;
                    </h5>
                    <h5>
                        4.2.16. distribute and otherwise use obscene, abusive and offensive words and phrases in the
                        Game, including in the User&apos;s name (nickname);
                    </h5>
                    <h5>
                        4.2.17. host malicious programs or links to resources that contain or may contain such programs;
                    </h5>
                    <h5>
                        4.2.18. distribute materials of a pornographic or erotic nature in the Game as well as links to
                        them;
                    </h5>
                    <h5>
                        4.2.19. issue threats in the Game as well as make calls for violence and other illegal actions;
                    </h5>
                    <h5>
                        4.2.20. distribute materials with elements of violence, cruelty, racial, interethnic or
                        interreligious strife in the Game as well as links to such materials;
                    </h5>
                    <h5>
                        4.2.21. publicize and demonstrate in the Game a Nazi, extremist or other equated attribute,
                        symbolism and other objects;
                    </h5>
                    <h5>
                        4.2.22. publicize in the Game criminal and other unlawful activities, as well as post manuals
                        for the commission of unlawful acts;
                    </h5>
                    <h5>
                        4.2.23. disseminate any other information in the Game that, in the opinion of the Licensor,
                        violates the law, morality and ethics or is undesirable;
                    </h5>
                    <h5>4.2.24. commit criminal and other unlawful acts.</h5>
                    <p>
                        The Licensee&apos;s violation of the terms of this Agreement is the basis for termination of
                        granting the Licensee the rights to use the Game, including non-activated data and commands.
                    </p>
                    <h2>5. Obligations of the Licensor</h2>
                    <h3>The Licensor assumes the following obligations:</h3>
                    <p>
                        5.1. arrange for the Licensee the possibility to use the right to use the Game on the terms and
                        conditions set forth in this Agreement;
                    </p>
                    <p>
                        5.2. notify the Licensee by publishing information on the Game Website about the changes in the
                        terms of this Agreement;
                    </p>
                    <p>
                        5.3. grant the Licensee the right to use activated data and commands via the Internet from the
                        Game Website free of charge unless otherwise provided by this Agreement;
                    </p>
                    <p>
                        5.4. grant the Licensee the right to use the non-activated data and commands for the
                        Remuneration.
                    </p>
                    <p></p>
                    <h2>6. Rights of the Licensor</h2>
                    <p></p>
                    <h3>The Licensor has the right to:</h3>
                    <p>
                        6.1. at any time, unilaterally restrict, expand, modify the contents of this License Agreement
                        and (or) the Game as a computer program without prior notice to the Licensee;
                    </p>
                    <p>
                        6.2. suspend or modify the Game as a computer program, change the conditions for its licensing
                        without prior notice to the Licensee;
                    </p>
                    <p>
                        6.3. at any time modify, delete any information placed by the Licensee on the Game Website and
                        on other domain names owned and/or administered by the Licensor, including statements and
                        advertisements of the Licensee;
                    </p>
                    <p>
                        6.4. at any time suspend, restrict and/or terminate this License Agreement unilaterally with
                        respect to the Game as a computer program for any or all Licensees, including if the Licensee
                        fails to comply with the terms of this Agreement or the Game Rules;
                    </p>
                    <p>
                        6.5. establish and store information about Licensee&apos;s IP addresses, use the files of
                        technical information (cookies) placed on the personal computer of the Licensee in order to
                        collect statistical information and identify the Licensee;
                    </p>
                    <p>6.6. send information messages to the Licensee or technical information related to the Game;</p>
                    <p>
                        6.7. during the game process make remarks to the Licensees, warn, notify, inform them of
                        non-compliance with the licensing terms as well as with the Game Rules or other terms of this
                        Agreement. Instructions of the Licensor that have been given during the game process are
                        mandatory for execution by the Licensee;
                    </p>
                    <p>
                        6.8. at any time modify, supplement, edit the Game, any of its parts, including the
                        Client&apos;s part of the Game, without any prior notification to the Licensee;
                    </p>
                    <p>
                        6.9. take measures not prohibited by law for the protection of own intellectual rights in
                        relation to the Game.
                    </p>
                    <h2>7. Limitation of Liability of the Licensor</h2>
                    <p>
                        7.1. Licensee uses the Licensor&apos;s Resources, the Game, including the Client&apos;s part of
                        the Game (if any) at its own risk. The Game and the rights to use it are granted &#34;as
                        is&#34;Â.
                    </p>
                    <p>
                        7.2. The Licensor is not and shall not be liable for possible unlawful actions of the Licensee
                        or third parties.
                    </p>
                    <p>
                        7.3. The Licensor shall not be liable for Licensee&apos;s loss of access to the Licensee&apos;s
                        Account in the Game (loss of login, password, other information necessary for Licensee&apos;s
                        participation in the Game).
                    </p>
                    <p>
                        7.4. The Licensor is not responsible for the lack of Internet access for the Licensee, for the
                        quality of the services of the Internet communication providers with which the Licensee has
                        concluded agreements for the provision of Internet access services.
                    </p>
                    <p>
                        7.5. The Licensor does not reimburse the Licensee for the costs associated with the payment of
                        the Licensee&apos;s Remuneration, including in the event of the suspension or termination of
                        this Agreement for any reason, unless otherwise expressly provided by applicable law.
                    </p>
                    <p>
                        7.6. The Licensor is not liable for incomplete, inaccurate, incorrect designation by the
                        Licensee of its data when creating the Licensee&apos;s Account in the Game.
                    </p>
                    <p>
                        7.7. The Licensor shall not be liable for the loss of game values &#34;â€¹&#34;â€¹resulting from
                        participation in the Game in the course of the game process by the Licensee.
                    </p>
                    <p>7.8. The Licensor does not guarantee that:</p>
                    <h5>7.8.1. the Game will meet the subjective requirements and expectations of the Licensee;</h5>
                    <h5>
                        7.8.2. the game process on the Licensor&apos;s Resources, as well as the grant of the rights to
                        use the Games will proceed continuously, quickly, without technical failures, reliably and
                        without errors;
                    </h5>
                    <h5>7.8.3. the results that can be obtained by using the Game will be free of mistakes;</h5>
                    <h5>
                        7.8.4. The Game will be available and can be used around the clock, at a particular point in
                        time or for any period of time.
                    </h5>
                    <p>
                        7.9. The Licensor shall not be liable for the occurrence of direct or indirect damage to the
                        Licensee or other third parties caused as a result of:
                    </p>
                    <h5>7.9.1. the use or inability to use the Licensor&apos;s Resources;</h5>
                    <h5>
                        7.9.2. unauthorized access of any third parties to the Licensee&apos;s personal information,
                        including the Licensee&apos;s Account or Licensee&apos;s personal account in the Game;
                    </h5>
                    <p>7.9.3. statement or behavior of any third party made on the Licensor&apos;s Resources.</p>
                    <p>
                        7.10. In all circumstances, the Licensor&apos;s liability to Licensee is limited to 1,000 (one
                        thousand) rubles, unless otherwise expressly provided by applicable law.
                    </p>
                    <p>
                        7.11. The Licensor is not obliged to provide the Licensee with any evidence, documents and other
                        evidence that the Licensee violated the terms of the Agreement as a result of which the
                        Agreement was suspended or terminated.
                    </p>
                    <p>
                        7.12. The Licensee understands, accepts and agrees that the Game may contain various sound
                        and/or video effects that, in certain circumstances, may cause aggravation of ill conditions in
                        persons prone to epileptic or other nervous disorders, and the Licensee guarantees that he/she
                        does not suffer from these disorders and in case of these disorders the Licensee undertakes not
                        to use the Game.
                    </p>
                    <p>
                        7.13. The Licensee accepts and agrees that regular long-term (continuous) use of personal
                        computer or mobile device can cause various complications of the physical condition, including
                        impaired vision, scoliosis, various forms of neuroses and other negative effects on the body.
                        The Licensee guarantees that he/she will use the Game exclusively for a reasonable time, with
                        breaks for rest or other measures for the prevention of physical condition if such are
                        recommended or prescribed to the Licensee.
                    </p>
                    <h2>8. Obligations of the Licensee</h2>
                    <p>8.1. The Licensee shall:</p>
                    <h5>
                        8.1.1. to abide by the terms of this Agreement, including the Rules of the Game, without any
                        restrictions;
                    </h5>
                    <h5>8.1.2. provide accurate information at the time of registration on the Games Website;</h5>
                    <h5>8.1.3. not exceed the limits of the use of the Game as set in this Agreement;</h5>
                    <h5>
                        8.1.4. not violate in any other way the intellectual property rights of the Licensor in relation
                        to the Game and/or any parts of the Game, in particular, the Licensee shall not copy, broadcast,
                        send, publish, and otherwise distribute and reproduce materials (text, graphics, audio-video)
                        contained in the Game without the written consent of the Licensor;
                    </h5>
                    <h5>
                        8.1.5. independently take appropriate measures to ensure the security of its Accounts in the
                        Game and prevent unauthorized use by third parties of these Accounts;
                    </h5>
                    <h5>
                        8.1.6. confirm its data including the last name, first name, middle name, other data at the
                        request of the Licensor in connection with the conclusion and implementation of this Agreement;
                    </h5>
                    <h5>
                        8.1.7. comply with other requirements and fulfill other obligations provided for by this
                        Agreement and the Game Rules.
                    </h5>
                    <p>
                        8.2. The Licensee warrants that it has all the necessary powers to enter into this Agreement. In
                        the event that the Licensee has not reached the age of majority (18 years of age) or has become
                        completely incompetent due to another circumstances stipulated by the current legislation, he
                        must independently obtain the necessary permission in the form required by law from his parents
                        or legal representatives.
                    </p>
                    <p>
                        8.3. Other obligations of the Licensee are stipulated in the Game Rules, as well as in the
                        Section 7 of this Agreement.
                    </p>
                    <h2>9. Rights to use non-activated data and commands</h2>
                    <p>
                        9.1. This section of the Agreement regulates the procedure and conditions for the Licensor to
                        grant the Licensee the Right to use non-activated data and commands.
                    </p>
                    <p>
                        9.2. At the Licensee&apos;s option, the Licensor grants Licensee the Right to use non-activated
                        data and commands.
                    </p>
                    <p>
                        The Right to use non-activated data and commands is granted to the Licensee on a reimbursable
                        basis (for the Remuneration) under the conditions of a simple non-exclusive license.
                    </p>
                    <p>
                        The Licensee obtains the Right to use non-activated data and commands after the making the
                        Remuneration stipulated by the Agreement, namely after the Licensor reflects the in-game
                        values&#34;â€¹&#34;â€¹in the form of the in-game currency of the Game in the Licensee&apos;s
                        Account in the Game.
                    </p>
                    <p>
                        The Right to use non-activated data and commands is granted to the Licensee for the term of this
                        Agreement, if such right is not terminated earlier, including in connection with the
                        implementation of the Game scenario.
                    </p>
                    <p>
                        The amount of the Remuneration may be changed by the Licensor unilaterally at any time without
                        prior notice to Licensee. The Licensee is aware that during the use of the Game the Licensor has
                        the right to refuse to use the Licensee&apos;s rights, including the right to use non-activated
                        data and commands, for any reason, and this does not give the Licensee the right to require the
                        Licensor to return the previously paid Remuneration, unless otherwise expressly provided by
                        applicable law.
                    </p>
                    <p>
                        9.3. When registering the Licensee&apos;s Account for the use of the Game, the Licensor
                        automatically creates the Licensee&apos;s personal account which is linked directly to the
                        Licensee&apos;s Account.
                    </p>
                    <p>
                        9.4. The procedure for replenishing a personal account, as well as the methods and conditions
                        for making a Remuneration through payment systems, are published by the Licensor on the Games
                        website: https://diep.io. The transfer of funds is carried out by the Licensee through supported
                        payment systems to the Licensor&apos;s account. A list of available payment systems is available
                        on the Game Website.
                    </p>
                    <p>
                        9.5. By paying the Remuneration the Licensee undertakes to follow the payment instructions for
                        the order and methods of payment, including the rules for sending the messages and the numbers
                        in short text messages (SMS), including the order of entering uppercase and lowercase letters,
                        numbers and input language. The Licensor shall not be liable for the correct fulfillment of the
                        payment terms by the Licensee. Regarding the rules and procedures for using payment systems for
                        replenishment of a personal account, the Licensee should apply to legal entities holding such
                        payment systems. The Licensor does not give the Licensee explanations on issues related to the
                        rules and procedures for using such payment systems and also does not pay to the Licensee
                        compensation for money paid as a license Remuneration for the Right to use non-activated data
                        and commands through payment systems if such payments were made with violation of the rules
                        established by payment systems as a result of which funds were not received by the Licensor.
                    </p>
                    <p>
                        9.6. Prior to receiving confirmation of the payment of the Remuneration, the Licensor shall not
                        be entitled to grant Licensee the Right to use non-activated data and commands or to grant such
                        right to a limited extent.
                    </p>
                    <p>
                        9.7. In the event of technical error, malfunctioning of the Game, deliberate action by the
                        Licensee it was possible for the Licensee to use non-activated data and commands not in
                        accordance with the procedure established by this Agreement, the Licensee undertakes to notify
                        the Licensor and pay the Licensor the Remuneration or eliminate all consequences of the unlawful
                        use of non-activated data and commands. The Licensor has the right to eliminate such
                        consequences without notifying the Licensee.
                    </p>
                    <p>
                        9.8. The Licensee is obliged to keep the documents confirming the payment of the Remuneration
                        during the entire period of use of the Game by the Licensee and, upon the request of the
                        Licensor, provide such documents to the latter as well as provide information on the
                        circumstances of the fulfillment of such payment by the Licensee.
                    </p>
                    <p>9.9. The Licensee must independently monitor the status of his personal account.</p>
                    <p>
                        9.10. The exclusive right to distribute and use the Game belongs to the Licensor, and therefore
                        no third party offers for granting the right to use non-activated data and commands can be
                        regarded by the Licensee as proposals originating from the Licensor.
                    </p>
                    <p>
                        The Licensee shall immediately notify the Licensor in the event of disputable, unclear
                        situations or about sending to the Licensee any offers of third parties related to the payment
                        of the Remuneration for the right to use non-activated data and commands, or the posting of such
                        advertisements and proposals on the Internet, with the exception of the Licensor&apos;s
                        Resources and placed on behalf of the Licensor.
                    </p>
                    <p>
                        In the event that the Licensee has paid for the said announcement using the details specified in
                        such an announcement in violation of these terms, the Licensee&apos;s claims to the Licensor
                        regarding the Licensee&apos;s lack of the Right to use non-activated data and commands are not
                        accepted, and the Licensor does not compensate the Licensee for money spent by the Licensee
                        under such circumstances.
                    </p>
                    <p>
                        9.11. In the event that the Licensor determines that the Licensee is able to use non-activated
                        data and commands from third parties, the Licensor may, at its discretion, either suspend or
                        restrict the operation of the Agreement.
                    </p>
                    <p>
                        9.12. The receipt by the Licensee of the Right to use non-activated data and commands does not
                        release the Licensee from compliance with this Agreement and the Game Rules and from applying to
                        her/him any measures specified in this Agreement or in the Game Rules.
                    </p>
                    <p>
                        9.13. The Licensor is not liable for possible unlawful actions of the Licensee during the
                        payment of the Remuneration for the Right to use non-activated data and commands. Up to
                        clarification of the circumstances the Licensor reserves the right to unilaterally withdraw the
                        game license (terminate the right to use the Game) and (or) the Right to use non-activated data
                        and commands if there is a suspicion that Licensee committed unlawful acts.
                    </p>
                    <p>
                        9.14. In the event that the Licensor has reason to believe that the Licensee commits unlawful
                        acts related to the payment of the Remuneration for the Right to use non-activated data and
                        commands, the Licensor has the right to forward relevant information to law enforcement agencies
                        for verification of this fact.
                    </p>
                    <p>
                        9.15. Aspects of payment by the Licensee of the Remuneration for the Right to use non-activated
                        data and commands via bank cards:
                    </p>
                    <p>
                        9.16. Operations on bank cards are made by the card holder or by the person authorized by him.
                    </p>
                    <p>
                        9.16.1. Authorization of transactions on bank cards is carried out by the bank. If the bank has
                        reason to believe that the operation is illegal, the bank has the right to refuse to carry out
                        this operation. Fraudulent transactions with bank cards are a criminal offense.
                    </p>
                    <p>
                        9.16.2. In order to avoid fraud when paying with bank cards, payments paid by a bank card can be
                        checked by the Licensor. The Licensee that is holder of the card that issued such payment shall
                        provide a copy of the documents required by the Licensor upon request from the Licensor to
                        confirm the legitimate use of the bank card. In the event that the requested documents are not
                        submitted by the Licensee within 14 days from the date of payment or if there are doubts about
                        their authenticity, the Licensor may suspend the Licensee&apos;s rights to use the Game until
                        the circumstances become clear.
                    </p>
                    <p>
                        9.17. The Licensee shall bear all costs associated with the transfer of funds to the Licensor
                        independently and at its own expense, including various fees and commissions of banks and
                        payment system operators.
                    </p>
                    <p>
                        9.18. The Licensee agrees, understands and accepts the fact that the Game is not a game of
                        chance, a game for money, a contest, a bet. Acquisition of a license for the Right to use
                        non-activated data and commands is the realization of Licensee&apos;s own will and desire and is
                        not necessary or mandatory for the use of Game in any way stipulated in this Agreement.
                    </p>
                    <h2>10. Territory and term of the Agreement</h2>
                    <p>
                        10.1. The Licensee has the right to use the Game in the ways described in this Agreement,
                        throughout the territory of the whole world using standard computer tools and programs within
                        the framework of the Game functionality.
                    </p>
                    <p>
                        10.2. This Agreement is valid from the moment of acceptance of its terms by the Licensee and is
                        valid for 1 (one) calendar year.
                    </p>
                    <p>
                        10.3. The validity of this Agreement is automatically extended for each subsequent 1 (one) year
                        if in case the earlier expiration of the specified term of the Agreement:
                    </p>
                    <h5>
                        10.3.1. the Licensor does not decide to change the provisions of this Agreement, the need to
                        conclude a new agreement with Licensees, terminate Game services and terminate access to it,
                        terminate this Agreement with respect to the Licensee, or terminate access to the Game in
                        relation to the Licensee.
                    </h5>
                    <h5>10.3.2. the Licensee will not decide on termination of the use of the Game.</h5>
                    <p>
                        10.4. Unless otherwise expressly provided by applicable law, the Licensor may at any time,
                        without notifying the Licensee and without giving reasons, terminate this Agreement unilaterally
                        out of court with immediate termination of access and the ability to use the Game and without
                        refunding any costs, damages or refunds received under the Agreement , including in the case of:
                    </p>
                    <h5>10.4.1. termination of the Game, i.e. termination of its operation by the Licensor;</h5>
                    <h5>
                        10.4.2. any, including one-time, violation by the Licensee of the terms of this Agreement or the
                        Game Rules.
                    </h5>
                    <p>
                        10.5. The Licensor may at any time without notice to the Licensee and without explanation of
                        reasons suspend or terminate this Agreement without refunding any costs, damages or refund
                        received under the Agreement, including in the event of any violation of the terms of this
                        Agreement by the Licensee or the Rules of the Game, unless otherwise expressly provided for by
                        applicable law.
                    </p>
                    <p>
                        10.6. The Licensee may at any time, without notifying the Licensor and without giving reasons,
                        terminate this Agreement unilaterally out of court by deleting the Licensee&apos;s Account.
                    </p>
                    <p>
                        10.7. The Licensee agrees and fully acknowledges that all exclusive rights to a localized
                        (translated into appropriate language) Game, including game characters, game items and
                        accessories, game coins, in-game values, graphics, photographs, animations, video images, video
                        clips, sound recordings, audio effects, music, text content of the Game and other components of
                        the Games belong to the Licensor, unless explicitly stated otherwise in the Agreement, on the
                        Game Website or in the Game itself.
                    </p>
                    <p>
                        10.8. The Licensee may not use certain elements of the Game outside the Game without the
                        Licensor&apos;s written consent.
                    </p>
                    <p>
                        10.9. The Licensee understands, accepts and agrees that any element of the Game, in particular
                        any game characters, is a constituent part of the Game as a computer program and is protected by
                        copyright. Although the Licensee is granted the right to use activated data and commands and the
                        Right to use non-activated data and commands may be granted in the process of using the Game,
                        the management of such game characters is allowed, including the development of such characters
                        in the Game scenario, such management and character development is not and can not be regarded
                        under any circumstances as a transfer and/or assignment of an exclusive right in relation to the
                        given game character from the Licensor to the Licensee. Such character management and
                        development is also not and can not be regarded as the authorship of the Licensee in relation to
                        the game character and/or the co-authorship of the Licensee and the Licensor with respect to the
                        game character.
                    </p>
                    <p>
                        10.10. This Agreement does not provide for the assignment (transfer, alienation) of any
                        exclusive rights or the issuance of an exclusive license for any components of the Game and/or
                        Game Resources from the Licensor to the Licensee as well as the assignment by Licensee of the
                        rights to use the Game.
                    </p>
                    <p>
                        10.11. In the event that the Licensee is not allowed to use computer games online on the basis
                        of the laws of his state or there are other legal restrictions, including age limits for
                        admission to such software, Licensee may not use the Game. In this case, the Licensee is solely
                        responsible for using the Game on the territory of its state in violation of local law.
                    </p>
                    <p>
                        10.12. This Agreement may be changed by the Licensor without any prior notification. Any changes
                        to the Agreement made by the Licensor unilaterally come into force on the day following the day
                        of publication of such changes on the Game Website. The Licensee undertakes to independently
                        verify the Agreement for changes. Failure by the Licensee to familiarize herself/himself with
                        the Agreement and/or the amended version of the Agreement shall not serve as a basis for the
                        Licensee&apos;s failure to fulfill its obligations and the Licensee&apos;s failure to comply
                        with the restrictions set forth in the Agreement.
                    </p>
                    <p>
                        10.13. The invalidity of one or more provisions of the Agreement, recognized in due course by a
                        court decision that has entered into force, does not entail invalidity of the Agreement as a
                        whole for the Parties. If one or several provisions of the Agreement are recognized invalid in
                        the established procedure, the Parties undertake to fulfill the obligations undertaken by the
                        Agreement as close as possible to the manner the Parties has implied when concluding and/or
                        coordinating the amendment of the Agreement.
                    </p>
                    <p>
                        10.14. For questions related to the implementation of the Agreement, please contact the
                        Licensor:
                        <br />
                        Email: support@shockwave.com
                    </p>
                    <p>
                        Diep.io uses 3rd party vendors for software and account related features. By using this site,
                        you agree to <a href='https://rivet.gg/terms/'>Rivet&apos;s term of service</a>.
                        https://rivet.gg/terms/
                    </p>
                </div>
            </div>
        </div>
    );
};

export { Terms };
