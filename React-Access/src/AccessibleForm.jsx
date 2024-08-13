import { Form, Button, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const AccessibleForm = () => {
    const { t, i18n } = useTranslation();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form Submitted");
    }; 
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Container>
            <h1>{t('form.header')}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>{t('form.nameLabel')}</Form.Label>
                    <Form.Control type="text" placeholder={t('form.emailPlaceholder')} aria-label={t('form.nameLabel')} required/>
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>{t('form.emailLabel')}</Form.Label>
                    <Form.Control type="email" placeholder={t('form.emailPlaceholder')} aria-label={t('form.emailLabel')} required />
                </Form.Group>

                <Form.Group controlId="formConferenceTrack">
                    <Form.Label>{t('form.trackLabel')}</Form.Label>
                    <Form.Control as="select" aria-label={t('form.trackLabel')} required>
                        {Object.keys(t('form.tracks', { returnObjects: true })).map(key => (
                            <option key={key} value={key}>
                                {t(`form.tracks.${key}`)}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formTerms">
                    <Form.Check type="checkbox" label={t('form.termsLabel')} aria-label={t('form.termsLabel')} required/>
                </Form.Group>
                
                <Form.Group controlId="formComments">
                    <Form.Label >{t('form commentsLabel')}</Form.Label>
                    <Form.Control as="textarea" rows={3} aria-label={t('form.commentsLabel')}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    {t('form.submission')}
                </Button>
            </Form>

            <div className="mt-3">
                <Button onClick={() => changeLanguage('en')} variant="secondary" className="me-2">English</Button>
                <Button onClick={() => changeLanguage('es')} variant="secondary" className="me-2">Espanol</Button>
                <Button onClick={() => changeLanguage('fr')} variant="secondary">Francais</Button>
            </div>
        </Container>
    );
};

export default AccessibleForm;