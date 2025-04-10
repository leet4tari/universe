import { writeText } from '@tauri-apps/plugin-clipboard-manager';
import { Wrapper, InviteButton, Image, TextWrapper, Title, Text, GemPill, Copied } from './styles';
import gemImage from '../../../../images/gem.png';
import { REFERRAL_GEMS, useAirdropStore } from '@app/store/useAirdropStore';
import { useEffect, useState } from 'react';
import { AnimatePresence, m } from 'motion/react';
import { useTranslation } from 'react-i18next';
import LinkIcon from './LinkIcon';

export default function Invite() {
    const airdropUrl = useAirdropStore((state) => state.backendInMemoryConfig?.airdropUrl || '');
    const { t } = useTranslation(['airdrop'], { useSuspense: false });
    const [copied, setCopied] = useState(false);
    const referralCode = useAirdropStore((s) => s.userDetails?.user?.referral_code || '');

    const url = `${airdropUrl}/download/${referralCode}`;

    const handleCopy = () => {
        setCopied(true);
        writeText(url);
    };

    useEffect(() => {
        if (copied) {
            const timeout = setTimeout(() => {
                setCopied(false);
            }, 2000);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [copied]);

    return (
        <Wrapper>
            <InviteButton onClick={handleCopy} disabled={copied}>
                <AnimatePresence>
                    {copied && (
                        <Copied initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <m.span initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ opacity: 0 }}>
                                {t('linkCopied')}
                            </m.span>
                        </Copied>
                    )}
                </AnimatePresence>

                <LinkIcon />

                <TextWrapper>
                    <Title>{t('inviteFriends')}</Title>
                    <Text>{t('inviteFriendsText')}</Text>
                </TextWrapper>

                <GemPill>
                    {REFERRAL_GEMS.toLocaleString()}
                    <Image src={gemImage} alt="" />
                </GemPill>
            </InviteButton>
        </Wrapper>
    );
}
