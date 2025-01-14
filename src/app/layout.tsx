import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MantineProvider } from '@mantine/core'
import { AgencyContextProvider } from '@/context/agencies.context'
import '@mantine/core/styles.css'
import { CartContextProvider } from '@/context/cart.context'
import { StoreContextProvider } from '@/context/store.context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Purple store',
	description: 'Purple night web app store by bastille.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='fr'>
			<body className={inter.className}>
				<MantineProvider>
					<AgencyContextProvider>
						<StoreContextProvider>
							<CartContextProvider>{children}</CartContextProvider>
						</StoreContextProvider>
					</AgencyContextProvider>
				</MantineProvider>
			</body>
		</html>
	)
}
