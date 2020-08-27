import Link from 'next/link';
import Layout from '../components/layout';
import Content from '../components/content';
import styles from '../styles/privacy.module.scss';

const Privacy = () => {
    let date = new Date();

    return (
        <Layout>
            <Content>
                <main className={styles.privacy}>
                    <section>
                        <h1>Privacy Statement</h1>
                        <span>Last Updated: August 2020 <Link href='/privacy'><a style={{ marginLeft: '1em' }}>What's new?</a></Link></span>
                        <p>
                            Your privacy is important to us. This privacy statement explains how <Link href="/"><a>Veritas Game Launcher</a></Link> process and for what purposes any kind of data that you produce. This document is under development so, if you have any questions or suggestions, please, contact us. We'll be very grateful for your contribution and glad to help you.
                        </p>
                        <p>
                            This statement applies to the interactions that our application has with you and third-parties services listed below, as well as other products that display this statement.
                        </p>
                    </section>
                    <aside>
                        <ul>
                            <li>
                                <a href="#personal-data">Personal data</a>
                            </li>
                            <li>
                                <a href="#third-party-services">Third-party services</a>
                            </li>
                            <li>
                                <a href="#metadata">Metadata</a>
                            </li>
                            <li>
                                <a href="#analytics">Analytics</a>
                            </li>
                        </ul>
                    </aside>
                    <article>
                        <h4 id="personal-data">Personal data</h4>
                        <p>
                            Our application doesn't collect any personal info. All generated data is saved only and exclusively in your device. These infomations only help you to have a better user expirence so, it's life cycle is aligned with application usage.
                        </p>

                        <h4 id="third-party-services">Third-party services</h4>
                        <p>
                            We offer the opportunity to you to connect in supported third-party services to allow our application to link and process the information provided by these services. We don't collect that data and <Link href="/"><a>Veritas Game Launcher</a></Link> process it only and exclusively in your device.
                        </p>

                        <h4 id="metadata">Metadata</h4>
                        <p>
                            Our application use the <Link href="https://www.igdb.com/"><a>Internet Games Database</a></Link> services to provide you a better expirence. We use their services accordingly to <Link href="https://www.twitch.tv/p/legal/developer-agreement/"><a>Twitch Develop Services Agreement</a></Link>.
                        </p>

                        <h4 id="analytics">Analytics</h4>
                        <p>
                            <Link href="/"><a>Veritas Game Launcher</a></Link> is and always will be a product in evolution and, sometimes, problems maybe will occour. So, to help us to improve the quality and stability of our application, we collect some anonymous data generated automatically by our application using services like <Link href="https://appcenter.ms/"><a>Visual Studio App Center</a></Link> that provide to us, developers, analytics like logs and crash reports that can be used during the changes to fix these problems.
                        </p>
                    </article>
                </main>
            </Content>
        </Layout>
    );
}

export default Privacy;