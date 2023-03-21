import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner scan = new Scanner(System.in);
        int choix = 0;

        Anglais vAnglais = new Anglais();
        vAnglais.addDico("Bonjour", "Hello");
        Breton vBreton = new Breton();
        vBreton.addDico("Bonjour", "Demat");
        Togolaise vTogolaise = new Togolaise();
        vTogolaise.addDico("Bonjour", "ndi");

        // Boucle while pour redemander la langue tant que la valeur saisie n'est pas valide
        while (choix < 1 || choix > 3) {
            System.out.println("Choisir votre langue pour dire bonjour ");
            System.out.println("1 : Anglais");
            System.out.println("2 : Breton");
            System.out.println("3 : Togolais");

            choix = scan.nextInt();

            if (choix < 1 || choix > 3) {
                System.out.println("Veuillez saisir une valeur valide (1, 2 ou 3).");
            }
        }

        // Affichage de la traduction en fonction de la langue choisie
        switch (choix) {
            case 1:
                System.out.println(vAnglais.getTraduction("Bonjour"));
                break;
            case 2:
                System.out.println(vBreton.getTraduction("Bonjour"));
                break;
            default:
                System.out.println(vTogolaise.getTraduction("Bonjour"));
                break;
        }
        //Fenetre f = new Fenetre();
        //f.setVisible(true);
    }
}