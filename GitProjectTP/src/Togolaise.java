public class Togolaise extends Version{

    public Togolaise(){
        super();
        this.entete = "En togolais : ";
    }

    public String getTraduction(String enFrancais){

        return this.entete + this.dico.get(enFrancais);
    }
}