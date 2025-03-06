import qrcode

# URL vers ton site
url = "https://jingerdwarf.fr"

# Génération du QR code optimisé pour un tatouage
qr = qrcode.QRCode(
    version=2,  # Réduit la densité du QR Code
    error_correction=qrcode.constants.ERROR_CORRECT_L,  # Correction minimale pour éviter un QR trop chargé
    box_size=10,  # Taille des pixels du QR Code
    border=2,  # Bordure fine pour gagner de l’espace
)

qr.add_data(url)
qr.make(fit=True)

# Génération de l’image en noir et blanc
qr_img = qr.make_image(fill="black", back_color="white")

# Sauvegarde du fichier
qr_img.save("qr_code_tattoo.png")

print("✅ QR Code généré avec succès : qr_code_tattoo.png")
