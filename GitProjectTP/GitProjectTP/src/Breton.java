public class Breton extends Version{
    
    public Breton(){
        super();
        this.entete = "En breton : ";
    }
    
    public String getTraduction(String enFrancais){
        return this.entete + this.dico.get(enFrancais);
    }
}
