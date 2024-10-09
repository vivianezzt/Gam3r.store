import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandSpotify,
    IconBrandTelegram,
} from '@tabler/icons-react'
import Logo from '../shared/Logo'

export default function Rodape() {
    return (
        <footer className="flex flex-col bg-black/30 text-zinc-400 mt-10">
            <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
            <div className="container flex flex-col py-10 gap-10">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-5 md:gap-0">
                    <Logo />
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-zinc-200 pb-2">Sobre</span>
                        <span className="text-sm">Nossa História</span>
                        <span className="text-sm">Política de Privacidade</span>
                        <span className="text-sm">Termos de Uso</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-zinc-200 pb-2">Contato</span>
                        <span className="text-sm">suporte@gam3r.store</span>
                        <div className=" text-sm flex items-center gap-2 justify-center md:justify-start">
                            <a href="t.me/zztsylva"><IconBrandTelegram size={20} className="text-blue-500" /></a>
                            <span>Telegram</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-1.5 justify-between">
                    <div className="flex gap-2 ">
                        <a href="https://github.com/vivianezzt"><IconBrandGithub size={28} stroke={1} /></a>
                        <a href="https://www.instagram.com/vivianezzt/"><IconBrandInstagram size={28} stroke={1} /></a>
                        <a href="https://open.spotify.com/playlist/1V0QEDyNP1FOgITlcxWZfW?si=OXKLfW-YRx-mZo1awQVd8g"><IconBrandSpotify size={28} stroke={1} /></a>
                       <a href="https://www.linkedin.com/in/vivianezzt/"><IconBrandLinkedin size={28} stroke={1} /></a>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-1.5 text-sm text-zinc-500">
                        <div className="flex gap-1.5">
                            <span>Feito com</span>
                            <span>❤️</span>
                            <span>por Viviane Aguiar {new Date().getFullYear()}</span>
                        </div>
                        <span className="hidden md:inline-block">-</span>
                        <span>Todos os direitos reservados</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}